'use strict';

// Certificate data
const certificates = [
   // AWS
   { category: "AWS", title: "AWS Certified Cloud Practitioner", file: "assets/certificates/AWS/8928f789-e06f-4177-8ccf-85711b17898d.pdf", type: "pdf" },
   { category: "AWS", title: "AWS Certified Solutions Architect Associate", file: "assets/certificates/AWS/db338f7c-1dc1-4f8f-bfc6-164a3c0d7d41.pdf", type: "pdf" },
   { category: "AWS", title: "AWS Certified Developer Associate", file: "assets/certificates/AWS/f9632b2c-70c7-49bc-9a7c-392b064c2f14.pdf", type: "pdf" },
   { category: "AWS", title: "AWS Certified SysOps Administrator Associate", file: "assets/certificates/AWS/fef656dc-af6f-4c0e-9834-b618de216783.pdf", type: "pdf" },

   // Commvault
   { category: "Commvault", title: "Commvault Cloud Platform Architect SaaS CCPA25", file: "assets/certificates/comvolt/CommvaultCloudPlatformArchitect-SaaSCCPA25-SAAS_Badge20251112-29-o937c0.pdf", type: "pdf" },
   { category: "Commvault", title: "Commvault Cloud Platform Architect Software CCPA25", file: "assets/certificates/comvolt/CommvaultCloudPlatformArchitect-SoftwareCCPA25-SW_Badge20251112-31-it8pu1.pdf", type: "pdf" },
   { category: "Commvault", title: "Commvault Cloud Sales Professional CCSP26", file: "assets/certificates/comvolt/CommvaultCloudSalesProfessional-CCSP26_Badge20251111-31-t1bwa0.pdf", type: "pdf" },

   // Fortinet
   { category: "Fortinet", title: "Fortinet Certified Associate in Cybersecurity", file: "assets/certificates/fortinet/Fortinet Certified Associate in Cybersecurity.pdf", type: "pdf" },
   { category: "Fortinet", title: "Fortinet Certified Fundamentals in Cybersecurity", file: "assets/certificates/fortinet/Fortinet Certified Fundamentals in Cybersecurity.pdf", type: "pdf" },
   { category: "Fortinet", title: "Fortinet Course Completion Certificate", file: "assets/certificates/fortinet/Course_Completion_Certificate.pdf", type: "pdf" },

   // Sophos
   { category: "Sophos", title: "Sophos Detection and Response Certified Engineer v5.5", file: "assets/certificates/sophos/Sophos Detection and Response Certified Engineer v5.5 (ET12)_92809411.pdf", type: "pdf" },
   { category: "Sophos", title: "Sophos Certification 2", file: "assets/certificates/sophos/64DEC12A2F694B8896A9EBFB3C634138150707.pdf", type: "pdf" },
   { category: "Sophos", title: "Sophos Certification 3", file: "assets/certificates/sophos/64DEC12A2F694B8896A9EBFB3C634138171304.pdf", type: "pdf" },
   { category: "Sophos", title: "Sophos Certification 4", file: "assets/certificates/sophos/64DEC12A2F694B8896A9EBFB3C634138171445.pdf", type: "pdf" },
   { category: "Sophos", title: "Sophos Certification 5", file: "assets/certificates/sophos/64DEC12A2F694B8896A9EBFB3C634138172183.pdf", type: "pdf" },

   // Extreme
   { category: "Extreme", title: "Extreme Networking", file: "assets/certificates/Extreme/Extreme Networking.pdf", type: "pdf" },
   { category: "Extreme", title: "Extreme Professional Solution Selling", file: "assets/certificates/Extreme/Extreme Professional Solution Selling.pdf", type: "pdf" },
   { category: "Extreme", title: "Extreme Associate Solution Selling", file: "assets/certificates/Extreme/Extreme Associate Solution Selling.pdf", type: "pdf" },
   { category: "Extreme", title: "Extreme Building Secure and Robust System", file: "assets/certificates/Extreme/Extreme building secure and rebust system.pdf", type: "pdf" },
   { category: "Extreme", title: "Extreme Badges", file: "assets/certificates/Extreme/Badges.png", type: "image" },

   // Dell
   { category: "Dell", title: "Dell SE Hyper Converged Infrastructure Credential 2025", file: "assets/certificates/dell/SE_ Hyper-Converged Infrastructure Credential 2025 certificate.pdf", type: "pdf" },

   // Zyxel
   { category: "Zyxel", title: "Zyxel Certified Network Associate Security", file: "assets/certificates/Zyxel/certificate-zcna-security-english-62aa7d0869e8862b283fbb20.pdf", type: "pdf" },
   { category: "Zyxel", title: "Zyxel Certified Network Engineer Level 1 Security", file: "assets/certificates/Zyxel/certificate-zcne-lv1-security-english-free-67c7b6a469166cf87800c335.pdf", type: "pdf" },
   { category: "Zyxel", title: "Zyxel Certified Network Engineer Vertical Elite", file: "assets/certificates/Zyxel/certificate-zcne-vertical-elite-free-66bef5cce5977ca3da0f4b3e (1).pdf", type: "pdf" },
   { category: "Zyxel", title: "Zyxel Certified Network Engineer Vertical Elite", file: "assets/certificates/Zyxel/certificate-zcne-vertical-elite-free-66bef5cce5977ca3da0f4b3e.pdf", type: "pdf" },
   { category: "Zyxel", title: "Zyxel Certified Network Engineer Vertical MSP", file: "assets/certificates/Zyxel/certificate-zcne-vertical-msp-free-66a33d4eadd916e7520249de.pdf", type: "pdf" },
   { category: "Zyxel", title: "Zyxel Certified Security Associate", file: "assets/certificates/Zyxel/certificate-zcsa-english-20232h-65122def6637efe4460c263c.pdf", type: "pdf" },

   // Hikvision
   { category: "Hikvision", title: "Hikvision Certification 1", file: "assets/certificates/Hikvision/2153bc22-ea13-4fbc-9e94-2ba733246dc9.pdf", type: "pdf" },
   { category: "Hikvision", title: "Hikvision Certification 2", file: "assets/certificates/Hikvision/c6b4555b-b290-4a55-b104-5016b970359c.pdf", type: "pdf" },

   // Huawei
   { category: "Huawei", title: "Huawei Certification", file: "assets/certificates/huwawie/photo (1).png", type: "image" },

   // Shinder
   { category: "Shinder", title: "Shinder Certification 1", file: "assets/certificates/shinder/certificate (1).pdf", type: "pdf" },
   { category: "Shinder", title: "Shinder Certification 2", file: "assets/certificates/shinder/certificate (2).pdf", type: "pdf" },
   { category: "Shinder", title: "Shinder Certification 3", file: "assets/certificates/shinder/certificate (3).pdf", type: "pdf" },
   { category: "Shinder", title: "Shinder Certification 4", file: "assets/certificates/shinder/certificate.pdf", type: "pdf" },
 ];