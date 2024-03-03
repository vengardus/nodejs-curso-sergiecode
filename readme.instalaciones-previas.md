# INSTALACIONES PREVIAS

## NVM 

### [How To Install NVM on Ubuntu 22.04](https://tecadmin.net/how-to-install-nvm-on-ubuntu-22-04/)

- Step 1: Installing NVM on Ubuntu

```bash
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

nvm --version   # verificar si se instaló correctamente
```

- Step 2: Installing Node using NVM

```bash
nvm install 20.11.1     # 20.11.1 es la versión específica. 
```

[Versiones disponibles de node...](https://nodejs.org/en/about/previous-releases)

- Step 3: Using NVM

```bash
nvm ls              # lista versiones instaladas  existentes

nvm use 20.11.0     # selecciona versión a trabajar

```
