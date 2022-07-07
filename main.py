import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import os

def main():
    """ Calls the Apps Script endpoint
    """

    script_id = os.getenv("SCRIPT_ID")
    creds, _ = google.auth.default()


    <script>
function onSuccess(docURL) {
  var div = document.getElementById('output');
  div.innerHTML = docURL;
}
function CreateNote() {
  var customer = document.getElementById("customer").value;
  var title = document.getElementById("title").value;
  var date = document.getElementById("date").value;
  google.script.run.withSuccessHandler(onSuccess)
    .createDoc(customer, title, date);
}
</script>

    
