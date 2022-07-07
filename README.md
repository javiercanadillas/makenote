# Create Notes from templates using Apps Script

This app gives you a quick UI from where you can create a Google Doc for notes or documentation prepopulated with some content (like title, customer, date...).

The UI of the application is still very alpha, but the application itself is fuctional.

## Installation

- Create a new regular Google Doc that will act as a template. The template should have placeholders for the strings you want customized, taking as input `customer`, `title` and `date` as input vars. Get its `documentID`.
- Select a Drive folder where the new documents will be created. Get its `folderID`.
- Modify `code.js` and add the `documentID` and `folderID` from before. Make any customizations to the renaming logic that you may want.
- Deploy the code into the Apps Script execution platform. You either do this by copying the files one by one into `script.google.com` or by using [clasp](github.com/google/clasp).
- Deploy the application as a standalone Web App following [https://developers.google.com/apps-script/guides/web?hl=en#deploy_a_script_as_a_web_app](these steps).
- Alias the generated web app URL into something that is easy to consume, or use something like Go Links.
