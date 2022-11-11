#export PATH=$PATH:/app/bin:/app/sbin:/app/local/mysql/bin/
#export MIBDIRS=$MIBDIRS:/app/local/share/snmp/mibs/
#export LD_LIBRARY_PATH=/app/lib:/app/lib64/:/app/lib/pulseaudio/:/app/lib/freerdp2/:/app/usr/lib/x86_64-linux-gnu/:/app/local/mysql/lib:/lib:/lib64/:/lib/x86_64-linux-gnu/:/local/mysql/lib:/app/lib/perl5/5.18.2/x86_64-linux/CORE/:/app/lib/instantclient_11_2
#export D_BIND_NOW=${LD_LIBRARY_PATH}
#export PYTHONPATH=/app/lib/python2.7/site-packages:/app/local/lib/python2.7/dist-packages:/app/lib/python2.7/:/app/local/share/self_manage:/usr/lib/python2.7/dist-packages/:/app/local/share/self_manage/3rdparty
#export PERL5LIB=/app/lib/perl5/5.18.2:/app/lib/perl5/5.18.2/x86_64-linux:/app/lib/perl5/site_perl/5.18.2/x86_64-linux:/app/lib/perl5/site_perl/5.18.2

#set oracle jdk environment
export JAVA_HOME=/app/lib/jdk
export JRE_HOME=${JAVA_HOME}/jre  
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib  
export PATH=${JAVA_HOME}/bin:$PATH

#set pure-ftpd environment
#export PURE_PASSWDFILE=/conf/ftp/pureftpd.passwd
#export PURE_DBFILE=/conf/ftp/pureftpd.pdb

export LANG=zh_CN.utf8

#export GUACAMOLE_HOME=/app/etc/guacamole
