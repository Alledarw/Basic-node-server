# Instructions
    
    Navigate to the /var/www directory: cd /var/www.
    Clone the repository: git clone https://github.com/Alledarw/Basic-node-server.git.
    Enter the cloned directory: cd basic-node-server.
    Run npm install to install Express (installs dependencies as per the package.json file).
    Ensure that no other server is running on port 80 - check using pm2 - stop or delete if anything else is running on the same port.
    Start the server using pm2: pm2 start index.js --name basic-html-server.

    // Remember to change the ports in index.js for it to work with the reverse proxy in pm2!

  # pm2 commands

    pm2 start index.js -name <name_of_app> - Start a node application
    pm2 status - See running applications
    pm2 delete <name_of_app> - Remove an application
    pm2 restart <name_of_app> - Restart an application
    pm2 stop <name_of_app> - Stop an app but keep it in the list
    pm2 logs - See console.logs from the applications
    pm2 save - Save all the processes running if the server crash etc.
    pm2 resurrrect - To start the processes again after a reboot.


