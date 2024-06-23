function get_bibtex() {
        const bibtexData = {
                'infocom16-wifi': `@inproceedings{DBLP:conf/infocom/PeiZCTMMLP16,
author       = {Changhua Pei and
                Youjian Zhao and
                Guo Chen and
                Ruming Tang and
                Yuan Meng and
                Minghua Ma and
                Ken Ling and
                Dan Pei},
title        = {WiFi can be the weakest link of round trip network latency in the
                wild},
booktitle    = {35th Annual {IEEE} International Conference on Computer Communications,
                {INFOCOM} 2016, San Francisco, CA, USA, April 10-14, 2016},
pages        = {1--9},
publisher    = {{IEEE}},
year         = {2016},
doi          = {10.1109/INFOCOM.2016.7524396}
}`,
                'mobisys16-sui': `@inproceedings{DBLP:conf/mobisys/SuiZLMPZLM16,
author       = {Kaixin Sui and
                Mengyu Zhou and
                Dapeng Liu and
                Minghua Ma and
                Dan Pei and
                Youjian Zhao and
                Zimu Li and
                Thomas Moscibroda},
title        = {Characterizing and Improving WiFi Latency in Large-Scale Operational
                Networks},
booktitle    = {Proceedings of the 14th Annual International Conference on Mobile
                Systems, Applications, and Services, MobiSys 2016, Singapore, June
                26-30, 2016},
pages        = {347--360},
publisher    = {{ACM}},
year         = {2016},
doi          = {10.1145/2906388.2906393}
}`,
                'ubicomp16-EDUM': `@inproceedings{DBLP:conf/huc/ZhouMZSPM16,
author       = {Mengyu Zhou and
                Minghua Ma and
                Yangkun Zhang and
                Kaixin Sui and
                Dan Pei and
                Thomas Moscibroda},
title        = {{EDUM:} classroom education measurements via large-scale WiFi networks},
booktitle    = {Proceedings of the 2016 {ACM} International Joint Conference on Pervasive
                and Ubiquitous Computing, UbiComp 2016, Heidelberg, Germany, September
                12-16, 2016},
pages        = {316--327},
publisher    = {{ACM}},
year         = {2016},
doi          = {10.1145/2971648.2971657}
}`,
                'iwqos16-privacy': `@inproceedings{DBLP:conf/iwqos/SuiZLMXLP16,
author       = {Kaixin Sui and
                Youjian Zhao and
                Dapeng Liu and
                Minghua Ma and
                Lei Xu and
                Zimu Li and
                Dan Pei},
title        = {Your trajectory privacy can be breached even if you walk in groups},
booktitle    = {24th {IEEE/ACM} International Symposium on Quality of Service, IWQoS
                2016, Beijing, China, June 20-21, 2016},
pages        = {1--6},
publisher    = {{IEEE}},
year         = {2016},
doi          = {10.1109/IWQOS.2016.7590444}
}`,
                'iwqos17-schedule': `@inproceedings{DBLP:conf/iwqos/MaZSXLP17,
author       = {Minghua Ma and
                Kai Zhao and
                Kaixin Sui and
                Lei Xu and
                Yong Li and
                Dan Pei},
title        = {You can hide, but your periodic schedule can't},
booktitle    = {25th {IEEE/ACM} International Symposium on Quality of Service, IWQoS
                2017, Vilanova i la Geltr{\'{u}}, Spain, June 14-16, 2017},
pages        = {1--6},
publisher    = {{IEEE}},
year         = {2017},
doi          = {10.1109/IWQOS.2017.7969154}p.org}
}`,
                'issre18-stepwise': `@inproceedings{DBLP:conf/issre/MaZPHD18,
author       = {Minghua Ma and
                Shenglin Zhang and
                Dan Pei and
                Xin Huang and
                Hongwei Dai},
title        = {Robust and Rapid Adaption for Concept Drift in Software System Anomaly
                Detection},
booktitle    = {29th {IEEE} International Symposium on Software Reliability Engineering,
                {ISSRE} 2018, Memphis, TN, USA, October 15-18, 2018},
pages        = {13--24},
publisher    = {{IEEE} Computer Society},
year         = {2018},
doi          = {10.1109/ISSRE.2018.00013}lp.org}
}`,
                'vldb20-slowsql': `@article{DBLP:journals/pvldb/MaYZWZJHLLQLCP20,
author       = {Minghua Ma and
                Zheng Yin and
                Shenglin Zhang and
                Sheng Wang and
                Christopher Zheng and
                Xinhao Jiang and
                Hanwen Hu and
                Cheng Luo and
                Yilin Li and
                Nengjun Qiu and
                Feifei Li and
                Changcheng Chen and
                Dan Pei},
title        = {Diagnosing Root Causes of Intermittent Slow Queries in Large-Scale
                Cloud Databases},
journal      = {Proc. {VLDB} Endow.},
volume       = {13},
number       = {8},
pages        = {1176--1189},
year         = {2020},
doi          = {10.14778/3389133.3389136}
}`,
                'atc21-JumpStarter': `@inproceedings{DBLP:conf/usenix/MaZ0XLLNZWP21,
author       = {Minghua Ma and
                Shenglin Zhang and
                Junjie Chen and
                Jim Xu and
                Haozhe Li and
                Yongliang Lin and
                Xiaohui Nie and
                Bo Zhou and
                Yong Wang and
                Dan Pei},
title        = {Jump-Starting Multivariate Time Series Anomaly Detection for Online
                Service Systems},
booktitle    = {2021 {USENIX} Annual Technical Conference, {USENIX} {ATC} 2021, July
                14-16, 2021},
pages        = {413--426},
publisher    = {{USENIX} Association},
year         = {2021},
}`,
                'dexa22-FPG-Miner': `@inproceedings{DBLP:conf/dexa/LiMNYCWYWLLYP22,
author       = {Mingjie Li and
                Minghua Ma and
                Xiaohui Nie and
                Kanglin Yin and
                Li Cao and
                Xidao Wen and
                Zhiyun Yuan and
                Duogang Wu and
                Guoying Li and
                Wei Liu and
                Xin Yang and
                Dan Pei},
title        = {Mining Fluctuation Propagation Graph Among Time Series with Active
                Learning},
booktitle    = {Database and Expert Systems Applications - 33rd International Conference,
                {DEXA} 2022, Vienna, Austria, August 22-24, 2022, Proceedings, Part
                {I}},
series       = {Lecture Notes in Computer Science},
volume       = {13426},
pages        = {220--233},
publisher    = {Springer},
year         = {2022},
doi          = {10.1007/978-3-031-12423-5\_17}}
}`,
                'www22-parsing': `@inproceedings{DBLP:conf/www/LiuZHZLKXMLDRZ22,
author       = {Yudong Liu and
                Xu Zhang and
                Shilin He and
                Hongyu Zhang and
                Liqun Li and
                Yu Kang and
                Yong Xu and
                Minghua Ma and
                Qingwei Lin and
                Yingnong Dang and
                Saravan Rajmohan and
                Dongmei Zhang},
title        = {UniParser: {A} Unified Log Parser for Heterogeneous Log Data},
booktitle    = {{WWW} '22: The {ACM} Web Conference 2022, Virtual Event, Lyon, France,
                April 25 - 29, 2022},
pages        = {1893--1901},
publisher    = {{ACM}},
year         = {2022},
doi          = {10.1145/3485447.3511993}}
}`,
                'kdd22-mthc': `@inproceedings{DBLP:conf/kdd/LiuYZMWZLLYWZWD22,
author       = {Yudong Liu and
                Hailan Yang and
                Pu Zhao and
                Minghua Ma and
                Chengwu Wen and
                Hongyu Zhang and
                Chuan Luo and
                Qingwei Lin and
                Chang Yi and
                Jiaojian Wang and
                Chenjian Zhang and
                Paul Wang and
                Yingnong Dang and
                Saravan Rajmohan and
                Dongmei Zhang},
title        = {Multi-task Hierarchical Classification for Disk Failure Prediction
                in Online Service Systems},
booktitle    = {{KDD} '22: The 28th {ACM} {SIGKDD} Conference on Knowledge Discovery
                and Data Mining, Washington, DC, USA, August 14 - 18, 2022},
pages        = {3438--3446},
publisher    = {{ACM}},
year         = {2022},
doi          = {10.1145/3534678.3539176}
}`,
                'fse22-logsurvey': `@inproceedings{DBLP:conf/sigsoft/HeZHXLKMWDRL22,
author       = {Shilin He and
                Xu Zhang and
                Pinjia He and
                Yong Xu and
                Liqun Li and
                Yu Kang and
                Minghua Ma and
                Yining Wei and
                Yingnong Dang and
                Saravanakumar Rajmohan and
                Qingwei Lin},
title        = {An empirical study of log analysis at Microsoft},
booktitle    = {Proceedings of the 30th {ACM} Joint European Software Engineering
                Conference and Symposium on the Foundations of Software Engineering,
                {ESEC/FSE} 2022, Singapore, Singapore, November 14-18, 2022},
pages        = {1465--1476},
publisher    = {{ACM}},
year         = {2022},
doi          = {10.1145/3540250.3558963}
}`,
                'fse22-disk': `@inproceedings{DBLP:conf/sigsoft/MaLTLZXZHWDRL22,
author       = {Minghua Ma and
                Yudong Liu and
                Yuang Tong and
                Haozhe Li and
                Pu Zhao and
                Yong Xu and
                Hongyu Zhang and
                Shilin He and
                Lu Wang and
                Yingnong Dang and
                Saravanakumar Rajmohan and
                Qingwei Lin},
title        = {An empirical investigation of missing data handling in cloud node
                failure prediction},
booktitle    = {Proceedings of the 30th {ACM} Joint European Software Engineering
                Conference and Symposium on the Foundations of Software Engineering,
                {ESEC/FSE} 2022, Singapore, Singapore, November 14-18, 2022},
pages        = {1453--1464},
publisher    = {{ACM}},
year         = {2022},
doi          = {10.1145/3540250.3558946}
}`,
                'seip23-conan': `@inproceedings{DBLP:conf/icse/LiZHKZMDXRLZ23,
author       = {Liqun Li and
                Xu Zhang and
                Shilin He and
                Yu Kang and
                Hongyu Zhang and
                Minghua Ma and
                Yingnong Dang and
                Zhangwei Xu and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {{CONAN:} Diagnosing Batch Failures for Cloud Systems},
booktitle    = {45th {IEEE/ACM} International Conference on Software Engineering:
                Software Engineering in Practice, SEIP@ICSE 2023, Melbourne, Australia,
                May 14-20, 2023},
pages        = {138--149},
publisher    = {{IEEE}},
year         = {2023},
doi          = {10.1109/ICSE-SEIP58684.2023.00018}g}
}`,
                'seip23-traceark': `@inproceedings{DBLP:conf/icse/ZengZXMQZCZZZGFRLZ23,
author       = {Zhengran Zeng and
                Yuqun Zhang and
                Yong Xu and
                Minghua Ma and
                Bo Qiao and
                Wentao Zou and
                Qingjun Chen and
                Meng Zhang and
                Xu Zhang and
                Hongyu Zhang and
                Xuedong Gao and
                Hao Fan and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {TraceArk: Towards Actionable Performance Anomaly Alerting for Online
                Service Systems},
booktitle    = {45th {IEEE/ACM} International Conference on Software Engineering:
                Software Engineering in Practice, SEIP@ICSE 2023, Melbourne, Australia,
                May 14-20, 2023},
pages        = {258--269},
publisher    = {{IEEE}},
year         = {2023},
doi          = {10.1109/ICSE-SEIP58684.2023.00029}
}`,
                'seip23-ageis': `@inproceedings{DBLP:conf/icse/YanHLMCLDZ23,
author       = {Xiaohan Yan and
                Ken Hsieh and
                Yasitha Liyanage and
                Minghua Ma and
                Murali Chintalapati and
                Qingwei Lin and
                Yingnong Dang and
                Dongmei Zhang},
title        = {Aegis: Attribution of Control Plane Change Impact across Layers and
                Components for Cloud Systems},
booktitle    = {45th {IEEE/ACM} International Conference on Software Engineering:
                Software Engineering in Practice, SEIP@ICSE 2023, Melbourne, Australia,
                May 14-20, 2023},
pages        = {222--233},
publisher    = {{IEEE}},
year         = {2023},
doi          = {10.1109/ICSE-SEIP58684.2023.00026}org}
}`,
                'www23-DFP': `@inproceedings{DBLP:conf/www/LinL0LMZCLW0DR023,
author       = {Qingwei Lin and
                Tianci Li and
                Pu Zhao and
                Yudong Liu and
                Minghua Ma and
                Lingling Zheng and
                Murali Chintalapati and
                Bo Liu and
                Paul Wang and
                Hongyu Zhang and
                Yingnong Dang and
                Saravan Rajmohan and
                Dongmei Zhang},
title        = {{EDITS:} An Easy-to-difficult Training Strategy for Cloud Failure
                Prediction},
booktitle    = {Companion Proceedings of the {ACM} Web Conference 2023, {WWW} 2023,
                Austin, TX, USA, 30 April 2023 - 4 May 2023},
pages        = {371--375},
publisher    = {{ACM}},
year         = {2023},
doi          = {10.1145/3543873.3584630}
}`,
                'dsn23-workload': `@inproceedings{DBLP:conf/dsn/QinMZZDLPBRGCQLZ23,
author       = {Xiaoting Qin and
                Minghua Ma and
                Yuheng Zhao and
                Jue Zhang and
                Chao Du and
                Yudong Liu and
                Anjaly Parayil and
                Chetan Bansal and
                Saravan Rajmohan and
                {\'{I}}{\~{n}}igo Goiri and
                Eli Cortez and
                Si Qin and
                Qingwei Lin and
                Dongmei Zhang},
title        = {How Different are the Cloud Workloads? Characterizing Large-Scale
                Private and Public Cloud Workloads},
booktitle    = {53rd Annual {IEEE/IFIP} International Conference on Dependable Systems
                and Network, {DSN} 2023, Porto, Portugal, June 27-30, 2023},
pages        = {522--530},
publisher    = {{IEEE}},
year         = {2023},
doi          = {10.1109/DSN58367.2023.00055}
}`,
                'kdd23-AnoFusion': `@inproceedings{DBLP:conf/kdd/ZhaoMZZ0XYFSZPL23,
author       = {Chenyu Zhao and
                Minghua Ma and
                Zhenyu Zhong and
                Shenglin Zhang and
                Zhiyuan Tan and
                Xiao Xiong and
                LuLu Yu and
                Jiayi Feng and
                Yongqian Sun and
                Yuzhi Zhang and
                Dan Pei and
                Qingwei Lin and
                Dongmei Zhang},
title        = {Robust Multimodal Failure Detection for Microservice Systems},
booktitle    = {Proceedings of the 29th {ACM} {SIGKDD} Conference on Knowledge Discovery
                and Data Mining, {KDD} 2023, Long Beach, CA, USA, August 6-10, 2023},
pages        = {5639--5649},
publisher    = {{ACM}},
year         = {2023},
doi          = {10.1145/3580305.3599902}
}`,
                'fse23-detection_better': `@inproceedings{DBLP:conf/sigsoft/GanatraPGKMBNM23,
author       = {Vaibhav Ganatra and
                Anjaly Parayil and
                Supriyo Ghosh and
                Yu Kang and
                Minghua Ma and
                Chetan Bansal and
                Suman Nath and
                Jonathan Mace},
title        = {Detection Is Better Than Cure: {A} Cloud Incidents Perspective},
booktitle    = {Proceedings of the 31st {ACM} Joint European Software Engineering
                Conference and Symposium on the Foundations of Software Engineering,
                {ESEC/FSE} 2023, San Francisco, CA, USA, December 3-9, 2023},
pages        = {1891--1902},
publisher    = {{ACM}},
year         = {2023},
doi          = {10.1145/3611643.3613898}
}`,
                'fse23-TraceDiag': `@inproceedings{DBLP:conf/sigsoft/DingZWXMWZCGGFR23,
author       = {Ruomeng Ding and
                Chaoyun Zhang and
                Lu Wang and
                Yong Xu and
                Minghua Ma and
                Xiaomin Wu and
                Meng Zhang and
                Qingjun Chen and
                Xin Gao and
                Xuedong Gao and
                Hao Fan and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
editor       = {Satish Chandra and
                Kelly Blincoe and
                Paolo Tonella},
title        = {TraceDiag: Adaptive, Interpretable, and Efficient Root Cause Analysis
                on Large-Scale Microservice Systems},
booktitle    = {Proceedings of the 31st {ACM} Joint European Software Engineering
                Conference and Symposium on the Foundations of Software Engineering,
                {ESEC/FSE} 2023, San Francisco, CA, USA, December 3-9, 2023},
pages        = {1762--1773},
publisher    = {{ACM}},
year         = {2023},
doi          = {10.1145/3611643.3613864},
timestamp    = {Fri, 31 May 2024 21:05:32 +0200},
bibsource    = {dblp computer science bibliography, https://dblp.org}
}`,
                'fse23-Assess&Summarize': `@inproceedings{DBLP:conf/sigsoft/JinZML0LL0Z0HSD23,
author       = {Pengxiang Jin and
                Shenglin Zhang and
                Minghua Ma and
                Haozhe Li and
                Yu Kang and
                Liqun Li and
                Yudong Liu and
                Bo Qiao and
                Chaoyun Zhang and
                Pu Zhao and
                Shilin He and
                Federica Sarro and
                Yingnong Dang and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {Assess and Summarize: Improve Outage Understanding with Large Language
                Models},
booktitle    = {Proceedings of the 31st {ACM} Joint European Software Engineering
                Conference and Symposium on the Foundations of Software Engineering,
                {ESEC/FSE} 2023, San Francisco, CA, USA, December 3-9, 2023},
pages        = {1657--1668},
publisher    = {{ACM}},
year         = {2023},
doi          = {10.1145/3611643.3613891}
}`,
                'issre23-CODEC': `@inproceedings{DBLP:conf/issre/LiMLQQYCTCRLZ23,
author       = {Haozhe Li and
                Minghua Ma and
                Yudong Liu and
                Si Qin and
                Bo Qiao and
                Randolph Yao and
                Harshwardhan Chaturvedi and
                Tri Tran and
                Murali Chintalapati and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {{CODEC:} Cost-Effective Duration Prediction System for Deadline Scheduling
                in the Cloud},
booktitle    = {34th {IEEE} International Symposium on Software Reliability Engineering,
                {ISSRE} 2023, Florence, Italy, October 9-12, 2023},
pages        = {298--308},
publisher    = {{IEEE}},
year         = {2023},
doi          = {10.1109/ISSRE59848.2023.00069}
}`,
                'eurosys24-AutoRCA': `@inproceedings{DBLP:conf/eurosys/ChenXMKGSCGFWZG24,
author       = {Yinfang Chen and
                Huaibing Xie and
                Minghua Ma and
                Yu Kang and
                Xin Gao and
                Liu Shi and
                Yunjie Cao and
                Xuedong Gao and
                Hao Fan and
                Ming Wen and
                Jun Zeng and
                Supriyo Ghosh and
                Xuchao Zhang and
                Chaoyun Zhang and
                Qingwei Lin and
                Saravan Rajmohan and
                Dongmei Zhang and
                Tianyin Xu},
title        = {Automatic Root Cause Analysis via Large Language Models for Cloud
                Incidents},
booktitle    = {Proceedings of the Nineteenth European Conference on Computer Systems,
                EuroSys 2024, Athens, Greece, April 22-25, 2024},
pages        = {674--688},
publisher    = {{ACM}},
year         = {2024},
doi          = {10.1145/3627703.3629553}
}`,
                'icse24-Xpert': `@inproceedings{DBLP:conf/icse/JiangZHYMQ0DRL024,
author       = {Yuxuan Jiang and
                Chaoyun Zhang and
                Shilin He and
                Zhihao Yang and
                Minghua Ma and
                Si Qin and
                Yu Kang and
                Yingnong Dang and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {Xpert: Empowering Incident Management with Query Recommendations via
                Large Language Models},
booktitle    = {Proceedings of the 46th {IEEE/ACM} International Conference on Software
                Engineering, {ICSE} 2024, Lisbon, Portugal, April 14-20, 2024},
pages        = {92:1--92:13},
publisher    = {{ACM}},
year         = {2024},
doi          = {10.1145/3597503.3639081}
}`,
                'vldb24-ImDiffusion': `@article{DBLP:journals/pvldb/ChenZMLDLHRLZ23,
author       = {Yuhang Chen and
                Chaoyun Zhang and
                Minghua Ma and
                Yudong Liu and
                Ruomeng Ding and
                Bowen Li and
                Shilin He and
                Saravan Rajmohan and
                Qingwei Lin and
                Dongmei Zhang},
title        = {ImDiffusion: Imputed Diffusion Models for Multivariate Time Series
                Anomaly Detection},
journal      = {Proc. {VLDB} Endow.},
volume       = {17},
number       = {3},
pages        = {359--372},
year         = {2023},
}`,
                'www24-VAE': `@inproceedings{DBLP:conf/www/WangPMWLPR0LZLX24,
author       = {Zexin Wang and
                Changhua Pei and
                Minghua Ma and
                Xin Wang and
                Zhihan Li and
                Dan Pei and
                Saravan Rajmohan and
                Dongmei Zhang and
                Qingwei Lin and
                Haiming Zhang and
                Jianhui Li and
                Gaogang Xie},
title        = {Revisiting {VAE} for Unsupervised Time Series Anomaly Detection: {A}
                Frequency Perspective},
booktitle    = {Proceedings of the {ACM} on Web Conference 2024, {WWW} 2024, Singapore,
                May 13-17, 2024},
pages        = {3096--3105},
publisher    = {{ACM}},
year         = {2024},
doi          = {10.1145/3589334.3645710}
}`,
                'fse24-AutoRCA': `@article{DBLP:journals/corr/abs-2401-13810,
author       = {Xuchao Zhang and
                Supriyo Ghosh and
                Chetan Bansal and
                Rujia Wang and
                Minghua Ma and
                Yu Kang and
                Saravan Rajmohan},
title        = {Automated Root Causing of Cloud Incidents using In-Context Learning
                with {GPT-4}},
journal      = {CoRR},
volume       = {abs/2401.13810},
year         = {2024},
doi          = {10.48550/ARXIV.2401.13810}
}`,
                'tnsm19-period': `@article{DBLP:journals/tnsm/ZhaoZWMZLZP19,
author       = {Nengwen Zhao and
                Jing Zhu and
                Yao Wang and
                Minghua Ma and
                Wenchi Zhang and
                Dapeng Liu and
                Ming Zhang and
                Dan Pei},
title        = {Automatic and Generic Periodicity Adaptation for {KPI} Anomaly Detection},
journal      = {{IEEE} Trans. Netw. Serv. Manag.},
volume       = {16},
number       = {3},
pages        = {1170--1183},
year         = {2019},
doi          = {10.1109/TNSM.2019.2919327}
}`,
                'tsc23-robust': `@article{DBLP:journals/tsc/ZhangJLSZXLZMJZZP23,
author       = {Shenglin Zhang and
                Pengxiang Jin and
                Zihan Lin and
                Yongqian Sun and
                Bicheng Zhang and
                Sibo Xia and
                Zhengdan Li and
                Zhenyu Zhong and
                Minghua Ma and
                Wa Jin and
                Dai Zhang and
                Zhenyu Zhu and
                Dan Pei},
title        = {Robust Failure Diagnosis of Microservice System Through Multimodal
                Data},
journal      = {{IEEE} Trans. Serv. Comput.},
volume       = {16},
number       = {6},
pages        = {3851--3864},
year         = {2023},
doi          = {10.1109/TSC.2023.3290018}
}`,
                'arxiv-DockerMock': `@article{DBLP:journals/corr/abs-2104-05490,
author       = {Mingjie Li and
                Xiaoying Bai and
                Minghua Ma and
                Dan Pei},
title        = {DockerMock: Pre-Build Detection of Dockerfile Faults through Mocking
                Instruction Execution},
journal      = {CoRR},
volume       = {abs/2104.05490},
year         = {2021}
}`,
                'arxiv-benchmark_dataset': `@article{DBLP:journals/corr/abs-2208-03938,
author       = {Zeyan Li and
                Nengwen Zhao and
                Shenglin Zhang and
                Yongqian Sun and
                Pengfei Chen and
                Xidao Wen and
                Minghua Ma and
                Dan Pei},
title        = {Constructing Large-Scale Real-World Benchmark Datasets for AIOps},
journal      = {CoRR},
volume       = {abs/2208.03938},
year         = {2022},
doi          = {10.48550/ARXIV.2208.03938}
}`,
                'arxiv-enhance_fairness': `@article{DBLP:journals/corr/abs-2209-08321,
author       = {Minghua Ma and
                Zhao Tian and
                Max Hort and
                Federica Sarro and
                Hongyu Zhang and
                Qingwei Lin and
                Dongmei Zhang},
title        = {Enhanced Fairness Testing via Generating Effective Initial Individual
                Discriminatory Instances},
journal      = {CoRR},
volume       = {abs/2209.08321},
year         = {2022},
doi          = {10.48550/ARXIV.2209.08321}
}`,
                'arxiv-time_series': `@article{DBLP:journals/corr/abs-2308-00393,
author       = {Zhenyu Zhong and
                Qiliang Fan and
                Jiacheng Zhang and
                Minghua Ma and
                Shenglin Zhang and
                Yongqian Sun and
                Qingwei Lin and
                Yuzhi Zhang and
                Dan Pei},
title        = {A Survey of Time Series Anomaly Detection Methods in the AIOps Domain},
journal      = {CoRR},
volume       = {abs/2308.00393},
year         = {2023},
doi          = {10.48550/ARXIV.2308.00393}
}`,
                'arxiv-taskwear': `@article{DBLP:journals/corr/abs-2311-17541,
author       = {Bo Qiao and
                Liqun Li and
                Xu Zhang and
                Shilin He and
                Yu Kang and
                Chaoyun Zhang and
                Fangkai Yang and
                Hang Dong and
                Jue Zhang and
                Lu Wang and
                Minghua Ma and
                Pu Zhao and
                Si Qin and
                Xiaoting Qin and
                Chao Du and
                Yong Xu and
                Qingwei Lin and
                Saravan Rajmohan and
                Dongmei Zhang},
title        = {TaskWeaver: {A} Code-First Agent Framework},
journal      = {CoRR},
volume       = {abs/2311.17541},
year         = {2023},
doi          = {10.48550/ARXIV.2311.17541}
}`,
                'arxiv-ufo': `@article{DBLP:journals/corr/abs-2402-07939,
author       = {Chaoyun Zhang and
                Liqun Li and
                Shilin He and
                Xu Zhang and
                Bo Qiao and
                Si Qin and
                Minghua Ma and
                Yu Kang and
                Qingwei Lin and
                Saravan Rajmohan and
                Dongmei Zhang and
                Qi Zhang},
title        = {{UFO:} {A} UI-Focused Agent for Windows {OS} Interaction},
journal      = {CoRR},
volume       = {abs/2402.07939},
year         = {2024},
doi          = {10.48550/ARXIV.2402.07939}
}`,
                'arxiv-allhands': `@article{DBLP:journals/corr/abs-2403-15157,
author       = {Chaoyun Zhang and
                Zicheng Ma and
                Yuhao Wu and
                Shilin He and
                Si Qin and
                Minghua Ma and
                Xiaoting Qin and
                Yu Kang and
                Yuyi Liang and
                Xiaoyu Gou and
                Yajie Xue and
                Qingwei Lin and
                Saravan Rajmohan and
                Dongmei Zhang and
                Qi Zhang},
title        = {AllHands: Ask Me Anything on Large-scale Verbatim Feedback via Large
                Language Models},
journal      = {CoRR},
volume       = {abs/2403.15157},
year         = {2024},
doi          = {10.48550/ARXIV.2403.15157}
}`
        };
        return bibtexData
}