# Developers-Hub-Cybersecurity-Internship
This Repo Contain Reports and Data of my Internship

> ⚠️ This repository does not contain the full OWASP Juice Shop source code.  
> The original application can be found here:  
> [https://github.com/juice-shop/juice-shop](https://github.com/juice-shop/juice-shop)  

This repository contains **only modified files, configurations, and documentation** created during my internship for security improvements.

# 🔐 DevelopersHub Corporation – Cybersecurity Internship (3 Weeks)

## 📌 About the Repository  

This repository documents my **cybersecurity internship** at **DevelopersHub Corporation**, where I applied real-world security testing, secure coding, and penetration testing techniques to strengthen a vulnerable Node.js web application.  

The internship simulated a **full vulnerability lifecycle**:  
**Week 1** – Discovery & Assessment → **Week 2** – Remediation & Hardening → **Week 3** – Advanced Testing & Final Audit.  

Each week’s deliverables include **source code changes**, **security reports**, **tool outputs**, and **before/after proof** of mitigations.  
---

## 📅 Weekly Breakdown  

### ✅ Week 1 – Security Assessment  

**Goal:**  
Identify security vulnerabilities in a Node.js-based **User Management System** through automated scans and manual testing.  

**Key Activities:**  
- **Vulnerability scanning** with [OWASP ZAP](https://www.zaproxy.org/)  
- Manual testing for **XSS** and **SQL Injection** vulnerabilities  
- Baseline risk analysis for **weak password storage** and **misconfigurations**  

📁 **Folder Includes:**  
- `Week1-Report.pdf` – Assessment findings with severity ratings  
- ZAP scan results  
- Screenshots of exploited vulnerabilities  
- Test payload samples  

---

### ✅ Week 2 – Implementing Security Measures  

**Goal:**  
Patch discovered vulnerabilities and implement **secure coding practices** to prevent reoccurrence.  

**Key Activities:**  
- Input validation using [`validator`](https://www.npmjs.com/package/validator)  
- Password hashing using [`bcrypt`](https://www.npmjs.com/package/bcrypt) with salting  
- Token-based authentication with [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)  
- Security HTTP headers with [`helmet`](https://www.npmjs.com/package/helmet)  

📁 **Folder Includes:**  
-
- Configuration files for implemented security libraries
- `Week2-Report.pdf` – Assessment findings with severity ratings 

---

### ✅ Week 3 – Advanced Security & Final Reporting  

**Goal:**  
Perform **penetration testing** post-mitigation, set up logging for threat visibility, and deliver the **final security audit report**.  

**Key Activities:**  
- **Nmap** port scanning & service enumeration  
- Centralized logging with [`winston`](https://www.npmjs.com/package/winston)  
- Creation of a **Security Best Practices Checklist** for ongoing maintenance  
- Final penetration test validation to confirm vulnerability fixes  

📁 **Folder Includes:**  
- Nmap scan results & screenshots  
- Final audit checklist  
- `Week 3 Report.pdf` – Consolidated documentation for all weeks  

---

Muhammad Shahab --- Rights Reserved
