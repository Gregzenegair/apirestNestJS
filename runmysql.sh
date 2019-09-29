#!/bin/bash
sudo docker run -d -p 3306:3306 --name=mysql-server --env="MYSQL_ROOT_PASSWORD=123456" mysql

while ! sudo mysql --user=root --password=123456 --host=127.0.0.1 --port=3306 -e ";" ; do
       echo "Can't connect yet, please wait, retrying ..."
       sleep 5
done

sudo mysql --user=root --password=123456 --host=127.0.0.1 --port=3306 -e "CREATE DATABASE apirest /*\!40100 DEFAULT CHARACTER SET utf8 */;"

sudo mysql --user=root --password=123456 --host=127.0.0.1 --port=3306 -e "CREATE USER 'apirest'@'%' IDENTIFIED WITH mysql_native_password BY '72M13B1HQMhrc3Es$';"

sudo mysql --user=root --password=123456 --host=127.0.0.1 --port=3306 -e "GRANT ALL PRIVILEGES ON * . * TO 'apirest'@'%';"

echo "Setup done, service mysql running"

