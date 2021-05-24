This md file was wroted study note for CentOS7;  

change "/etc/sudoers" file:  
write "enable ALL=(ALL)		ALL"   
over line  "root....."   
  
**mount ntfs disk**:  
mount -t ntfs-3g disk  

graphical start:systemctl set-default graphical.target  

multi:systemctl set-default multi-user.target  

create sublime_text-link show："this link cannot be used because its target doesn‘t exist"  
ln :must use an-absolute-path  
ln -s /home/enable/Download/sublime/sublime_text /home/enable/Desktop/sublime_text  

github：  
https://github.com.cnpmjs.org/  
https://github.com.cnpmjs.org/  
https://github.wuyanzheshui.workers.dev/  
  
restart network:  
service network restart   
  
linux do not get network:  
check ip address   
then add ip-address and the domain-name in /etc/hosts  
  
  
  
Computer Words:  
AP:absolute path  
RP:relative path  
  
jdk install path:  
/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.292.b10-1.el7_9.x86_64/jre/bin/java
  
centos7 show:  
screenfetch  
  
  
check program on terminal:  
ln -s /home/enable/Public/software/* /usr/local/share/*.desktop  
  
connect wifi:  
1.check wifi hardware  
dmesg | grep firmware  
  
2.check wifi name:  
iw dev  
wifi name after interface.  
  
3.active wifi interface:  
ip link set [name] up  
  
check whether active successfully:  
ip link show [name]  
  
4.check wifi network:  
iw [name] link  
it shows no connect  
  
5.scan wifi:  
iw [name] scan | grep SSID  
  
6.connect SSID was selected:  
wpa_supplicant -B -i wlp4s0 -c <(wpa_passphrase "[SSID]" "[PASSWD]")
  
7.use "dhcp" to get IP distribution:  
dhclient [name]  
  
8.check whether get IP from router:   
ip a show [name]  
if it has ip,it can connect internet.  
  
this from pages:https://blog.csdn.net/dou3516/article/details/102847529
  