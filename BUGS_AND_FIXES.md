## MongoDB Atlas DNS 


Error:
querySrv ECONNREFUSED _mongodb._tcp.cluster0...

Fix:
import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);