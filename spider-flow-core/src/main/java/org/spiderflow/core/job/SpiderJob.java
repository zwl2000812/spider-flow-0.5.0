package org.spiderflow.core.job;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spiderflow.context.SpiderContext;
import org.spiderflow.context.SpiderContextHolder;
import org.spiderflow.core.Spider;
import org.spiderflow.core.model.SpiderFlow;
import org.spiderflow.core.model.Task;
import org.spiderflow.core.service.SpiderFlowService;
import org.spiderflow.core.service.TaskService;
import org.spiderflow.core.utils.SpiderFlowUtils;
import org.spiderflow.model.SpiderNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * 爬虫定时执行
 *
 * @author Administrator
 */
@Component
public class SpiderJob extends QuartzJobBean {

    @Autowired
    private Spider spider;

    @Autowired
    private SpiderFlowService spiderFlowService;

    @Autowired
    private TaskService taskService;

    private static Map<Integer, SpiderContext> contextMap = new HashMap<>();

    @Value("${spider.job.enable:true}")
    private boolean spiderJobEnable;

    @Value("${spider.workspace}")
    private String workspace;

    private static Logger logger = LoggerFactory.getLogger(SpiderJob.class);

    @Override
    protected void executeInternal(JobExecutionContext context) {
        if (!spiderJobEnable) {
            return;
        }
        JobDataMap dataMap = context.getMergedJobDataMap();
        SpiderFlow spiderFlow = (SpiderFlow) dataMap.get(org.spiderflow.core.job.SpiderJobManager.JOB_PARAM_NAME);
        if ("1".equalsIgnoreCase(spiderFlow.getEnabled())) {
            run(spiderFlow, context.getNextFireTime());
        }
    }

    public void run(String id, JSONObject json) {
        QueryWrapper<SpiderFlow> sectionQueryWrapper;
        SpiderFlow flow;
        logger.error(String.valueOf(json));
        if (id == null) {
            try {
                json.get("spidername");
                json.get("status_flag");
                json.get("host_host");
            } catch (Exception e) {
                System.out.println("没有spidername");
                return;
            }
            sectionQueryWrapper = new QueryWrapper<SpiderFlow>().eq("name", json.get("spidername"));
            flow = spiderFlowService.list(sectionQueryWrapper).get(0);
        } else {
            flow = spiderFlowService.getById(id);
        }
        String xml_test1 = flow.getXml();
        if (xml_test1.contains(".csv")) {
            xml_test1 = xml_test1.replace(".csv", json.getString("host_host") + "-" + json.getString("status_flag") + new Date().getTime() + ".csv");
            flow.setXml(xml_test1);
        }
        SpiderNode root = SpiderFlowUtils.loadXMLFromString(flow.getXml());

        if (id == null) {
            for (SpiderNode nextNode : root.getNextNodes()) {

                SpiderNode test = nextNode.getNextNodes().get(0);
                List<String> need_replace_key = (List<String>) test.jsonProperty.get("variable-name");
                List<String> need_replace_value = (List<String>) test.jsonProperty.get("variable-value");
                List<String> last_replace_string = new ArrayList<>(need_replace_value);
                logger.info(String.valueOf(need_replace_value));
                for (int i = 0; i < need_replace_key.toArray().length; i++) {
                    for (Map.Entry entry : json.entrySet()) {
                        if (need_replace_key.get(i).equals(entry.getKey().toString())) {
                            last_replace_string.set(i, (String) entry.getValue());
//                            xml_test1 = xml_test1.replaceFirst("(variable-value.*)" + need_replace_value.get(i), "$1" + entry.getValue());

                        }
                    }
                }
                for ( int i =0; i < last_replace_string.toArray().length; i++){
                    last_replace_string.set(i, "&quot;"+last_replace_string.get(i) + "&quot;");
                }
                String s = String.valueOf(String.valueOf(need_replace_value).replace("\"", "&quot;"));
                xml_test1 = xml_test1.replace(s, String.valueOf(last_replace_string).replace(" \"", "\""));

                flow.setXml(xml_test1);
                break;
            }
        }
//        System.out.println("run之前**************************************************************************");
//        System.out.println(json.get("spidername"));
        run(flow, null);
    }

    public void run(SpiderFlow spiderFlow, Date nextExecuteTime) {
        Task task = new Task();
        task.setBeginTime(new Date());
        task.setFlowId(spiderFlow.getId());
        taskService.save(task);
        run(spiderFlow, task, nextExecuteTime);
    }

    public void run(SpiderFlow spiderFlow, Task task, Date nextExecuteTime) {
        org.spiderflow.core.job.SpiderJobContext context = null;
        Date now = new Date();
        try {
            context = org.spiderflow.core.job.SpiderJobContext.create(this.workspace, spiderFlow.getId(), task.getId(), false);
            SpiderContextHolder.set(context);
            contextMap.put(task.getId(), context);
            logger.info("开始执行任务{}", spiderFlow.getName());
            spider.run(spiderFlow, context);
            logger.info("执行任务{}完毕，下次执行时间：{}", spiderFlow.getName(), nextExecuteTime == null ? null : DateFormatUtils.format(nextExecuteTime, "yyyy-MM-dd HH:mm:ss"));
        } catch (Exception e) {
            logger.error("执行任务{}出错", spiderFlow.getName(), e);
        } finally {
            if (context != null) {
                context.close();
            }
            task.setEndTime(new Date());
            taskService.saveOrUpdate(task);
            contextMap.remove(task.getId());
            SpiderContextHolder.remove();
        }
        spiderFlowService.executeCountIncrement(spiderFlow.getId(), now, nextExecuteTime);
    }

    public static SpiderContext getSpiderContext(Integer taskId) {
        return contextMap.get(taskId);
    }
}
