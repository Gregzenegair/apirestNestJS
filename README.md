## Installation

Beforehand requires Mysql client, if not installed execute :
```bash
$ sudo apt install mysql-client-core-5.7
```

```bash
$ ./runmysql.sh
$ sudo docker image build . -t apirest
```

```bash
$ ./runmysql.sh
$ sudo docker image build . -t apirest
```

## Running the app

```bash
# development
$ ./startmysql.sh
$ sudo docker run -p 3000:3000 --net host apirest
```

