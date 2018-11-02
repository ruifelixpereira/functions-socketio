# Test API with Azure Web Apps

## Create Azure Web App
You can use the Azure Portal or Azure CLI for this.

## Set Node.js runtime

You can use Azure Portal or this sample using CLI:
```
az webapp config appsettings set --resource-group myResourceGroup --name <app_name> --settings WEBSITE_NODE_DEFAULT_VERSION=8.9.3
```
## Set Websocket
In order to use socket.io we need to change the Websocket setting in the Azure web app and put it "On".

## Prepare App
- Include process.json and web.config files
- In the package.json include a start task:
  ```
    "scripts": {
      "start": "node index.js"
    },
  ```

## Pack web app - Create a project ZIP file
Make sure you're still in the root directory of the sample project. Create a ZIP archive of everything in your project. The following command uses the default tool in your terminal:

```shell
# Bash
zip -r myAppFiles.zip .
```

You can just use my sample Makefile and run `make`.

## Deploy ZIP file
- In the browser, navigate to https://<app_name>.scm.azurewebsites.net/ZipDeployUI.
- Upload the ZIP file you created previously by dragging it to the file explorer area on the web page.

## Test
Browse https://<app_name>.azurewebsites.net
