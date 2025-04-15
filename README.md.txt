📦 What We'll Do:
Install Apache

Install MySQL

Install PHP

Configure Apache + PHP

Download & deploy OrangeHRM

Set up the database

Finalize OrangeHRM setup in the browser

🧰 Prerequisites
Make sure you’re on an Ubuntu 20.04+ server and have sudo privileges.

✅ Step 1: Update and install Apache
bash
Copy
Edit
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 -y
sudo systemctl enable --now apache2
Test in browser:
Visit http://your-server-ip/ → You should see the Apache default page.

✅ Step 2: Install MySQL Server
bash
Copy
Edit
sudo apt install mysql-server -y
sudo systemctl enable --now mysql
Secure the MySQL installation:

bash
Copy
Edit
sudo mysql_secure_installation
Create a database and user for OrangeHRM:

bash
Copy
Edit
sudo mysql -u root -p
In the MySQL prompt:

sql
Copy
Edit
CREATE DATABASE orangehrm;
CREATE USER 'orangehrmuser'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON orangehrm.* TO 'orangehrmuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
✅ Step 3: Install PHP and extensions
bash
Copy
Edit
sudo apt install php libapache2-mod-php php-mysql php-xml php-curl php-mbstring php-zip unzip -y
✅ Step 4: Download and deploy OrangeHRM
bash
Copy
Edit
cd /tmp
wget https://github.com/orangehrm/orangehrm/releases/download/5.6/orangehrm-5.6.zip
unzip orangehrm-5.6.zip
sudo mv orangehrm-5.6 /var/www/html/orangehrm
Set permissions:

bash
Copy
Edit
sudo chown -R www-data:www-data /var/www/html/orangehrm
sudo chmod -R 755 /var/www/html/orangehrm
✅ Step 5: Configure Apache for OrangeHRM
Create a new config file:

bash
Copy
Edit
sudo nano /etc/apache2/sites-available/orangehrm.conf
Paste:

apache
Copy
Edit
<VirtualHost *:80>
    ServerAdmin admin@yourdomain.com
    DocumentRoot /var/www/html/orangehrm
    ServerName yourdomain.com
    <Directory /var/www/html/orangehrm>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog ${APACHE_LOG_DIR}/orangehrm_error.log
    CustomLog ${APACHE_LOG_DIR}/orangehrm_access.log combined
</VirtualHost>
Enable the config:

bash
Copy
Edit
sudo a2ensite orangehrm
sudo a2enmod rewrite
sudo systemctl reload apache2
✅ Step 6: Final setup via browser
Visit:

arduino
Copy
Edit
http://your-server-ip/orangehrm/
Follow the on-screen setup:

Enter DB details:

DB: orangehrm

User: orangehrmuser

Password: StrongPassword123!

Finish the wizard to complete installation.

✅ Done! OrangeHRM is now live on your Ubuntu LAMP stack.

Would you like me to help you:

Set up SSL with Let's Encrypt?

Secure the MySQL server further?

Set up remote access or domain name?

Let me know what else you need!








You said:
CREATE