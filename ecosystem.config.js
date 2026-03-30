module.exports = {
  apps : [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./config-server/target/config-server-1.0.0.jar",
      cwd: "C:/IJSE/GCP/Cloud/LapShop/platform",
      interpreter: "none",
      log_file: ".logs/config-server.log",
    },
    {
      name: "eureka-server",
      script: "java",
      args: "-jar ./eureka-server/target/eureka-server-1.0.0.jar",
      cwd: "C:/IJSE/GCP/Cloud/LapShop/platform",
      interpreter: "none",
      log_file: ".logs/eureka-server.log",
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./api-gateway/target/api-gateway-1.0.0.jar",
      cwd: "C:/IJSE/GCP/Cloud/LapShop/platform",
      interpreter: "none",
        log_file: ".logs/api-gateway.log",
    }
  ]
}