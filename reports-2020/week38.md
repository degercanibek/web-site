# Week 38, 2020 - Sep 14 to Sep 20
## IMDG
### v4.1 | Code Freeze: Oct 22 | GA: Oct 30 
 - **IMDG v4.1-BETA-1** was released on **Sep 9**.
 - Zendesk issues (Ahmet, Petr, Matko)
 - SQL performance benchmarking, comparison with old query engine, Ignite and postgres (Vladimir)
 - [IMDG v4.1 GitHub Issue Burndown](https://docs.google.com/spreadsheets/d/1S7dLb5k_Xw6v_U5SI5nPozjUaXiPWNakv0e4zOciINU/edit#gid=1032493721)
### v4.0.3 | Sep 21
  - Release Board voting continues. Last minute LDAP fix is being included. 
### Core Team 
 - Jenkins, Download Machine maintenance (Josef)
 - Hiring for Core Team engineer (Matko)
 - Several people on vacation
### QE
 - Distribution automation pipeline fixes (Baris)
 - Testing Statistics for Durable and Scheduled Executor Service (Baris)
 - Testing Large Clusters, SQL, Priority Queue (Danny)
## Jet
### v4.3 | Oct 2020
**Timing:** 8 weeks in, 1 weeks to go
1 development spring (1 week) added to the release cycle. Projected release date is **first week of October**.
Scope of **v4.3** finalized. Feature overview:
 - Benchmarking and tuning - we tuned Jet to impressive performance, latency wise. This tuning will be available as well as clearly described benchmarks, parameters and mapping to real-world use-cases.
 - Unified API for processing file-based data. Seems fundamental and it really is. It raises a convenience to process data from files, structured or textual and load it into Hazelcast.
 - Increased resilience: Jobs made more robust against remote system failures and programmer errors. Job creates a “failure recovery point” if errors are experienced, giving users a space to fix it and resume.
 - Sorting: Again - basic operation that was missing until now.
 - HTTP Connector: You can call a REST endpoint in Jet for data ingestion. Great for evaluating and simple integrations.
 - Sparse events: Jet has can process time-series data. As such, time in Jet ticks just if the data arrive. But what the if data stream stops for a while? Time stops as well. Some outputs of Jet might get postponed, leading to unwanted latencies. We’re fixing this for some cases.
 - Unified Management Center: Jet can cluster can now be managed and monitored using the same tool as Hazelcast IMDG uses
See: [Hazelcast Jet v4.3](https://hazelcast.atlassian.net/wiki/spaces/JET/pages/2310438960/Hazelcast+Jet+4.3)
