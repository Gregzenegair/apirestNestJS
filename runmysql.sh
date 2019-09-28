#!/bin/bash
sudo docker start -d -p 3306:3306 --name=mysql-server --env="MYSQL_ROOT_PASSWORD=123456" --env=" MYSQL_USER=apirest" --env="MYSQL_PASSWORD=72M13B1HQMhrc3Es$" mysql
