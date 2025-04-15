   1  systemctl status httpd
    2  systemctl enable httpd
    3  systemctl start httpd
    4  systemctl status httpd
    5  clear
    6  yum update
    7  yum -y install mysql-server
    8  sudo yum install mariadb-server -y
    9  yum -y install mariadb-server
   10  sudo yum install mariadb-server -y
   11  cat /etc/os-release
   12  sudo dnf install mysql-server -y
   13  yum -y install mariadb-server
   14  dnf -y install mariadb-server
   15  clear
   16  wget https://dev.mysql.com/get/mysql80-community-release-el8-1.noarch.rpm
   17  sudo rpm -Uvh mysql80-community-release-el8-1.noarch.rpm
   18  dnf repolist enabled | grep mysql
   19  ls
   20  sudo dnf install mysql-community-server -y
   21  clear
   22  sudo systemctl enable --now mysqld
   23  sudo dnf install mysql-community-server -y
   24  ls
   25  sudo rpm -Uvh mysql80-community-release-el8-1.noarch.rpm
   26  ls
   27  dnf repolist enabled | grep mysql
   28  mysql80-community MySQL 8.0 Community Server
   29  sudo dnf install mysql-community-server -y
   30  sudo dnf install mysql-community-server -y --skip-broken
   31  sudo systemctl enable --now mysqld
   32  systemctl status mysql-service
   33  yum -y install mariadb-server
   34  sudo wget https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm
   35  sudo dnf install mysql80-community-release-el9-1.noarch.rpm -y
   36  sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023
   37  sudo dnf install mysql-community-client -y
   38  systemctl status mysql-service
   39  systemctl status mysql-server
   40  sudo dnf install mysql-community-server -y
   41  clear
   42  Enable and start mariadb service
   43  systemctl enable mysql.service
   44  systemctl enable mariadb.service
   45  ls
   46  sudo dnf install mariadb105
   47  sudo yum install mariadb
   48  apt-get install mariadb-client
   49  yum-get install mariadb-client
   50  mysql --version
   51  man mysql
   52  clear
   53  systemctl enable mariadb.service
   54  systemctl enable mysql.service
   55  cd /var/tmp
   56  wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
   57  ls
   58  wget https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
   59  ls
   60  wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
   61  sudo dnf install epel-release -y
   62  sudo dnf install epel-release
   63  dnf repolist | grep epel
   64  yum repolist | grep epel
   65  sudo dnf install epel-release
   66  sudo systemctl enable --now mysqld
   67  rpm -Uvh epel-release-latest-7.noarch.rpm
   68  rpm -Uvh webtatic-release.rpm
   69  yum install php56w php56w-opcache php56w-mysql php56w-curl php56w-xml php56w-mcrypt php56wgd -y
   70  rpm -Uvh epel-release-latest-7.noarch.rpm
   71  sudo dnf install php php-mysqlnd php-opcache php-curl php-xml php-gd php-mbstring -y
   72  sudo systemctl restart httpd
   73  echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
   74  sudo rm /var/www/html/info.php
   75  clear
   76  cd /root
   77  ls
   78  cd /var/tmp
   79  wget http://nchc.dl.sourceforge.net/project/orangehrm/stable/3.3.2/orangehrm-3.3.2.zip
   80  yum install unzip
   81  unzip orangehrm-3.3.2.zip
   82  mv orangehrm-3.3.2 /var/www/orangehrm
   83  cd /var/www
   84  ls
   85  chown -R apache.apache orangehrm
   86  cd /etc/httpd/conf.d
   87  ls
   88  vi orange.conf
   89  hostnamectl set-hostname appserver
   90  hostname
   91  systemctl stop httpd.service
   92  systemctl start httpd.service
   93  history