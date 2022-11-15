package org.spiderflow.core.utils;

import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVFormat;


public class MyCSVPrinter {
    public boolean FinalFlag = false;
    public CSVPrinter printer;

    public String key;

    public Integer taskId;

    public MyCSVPrinter(CSVPrinter printer, String key, Integer taskId) {
        this.printer = printer;
        this.key = key;
        this.taskId = taskId;
    }
}