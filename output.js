//Wed Apr 01 2026 08:46:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
let OOQ$$ = "v1.3",
  Q00Q00Q = "2023-08-03",
  $OOO$0 = "2023-12-12",
  O00OOOQ = "v1.3",
  QOO$0 = ($.isNode() ? process.env.lekebo_dj_Cookie : $.getdata("lekebo_dj_Cookie")) || "",
  Q0OQOO = [],
  $O$Q0$ = 0,
  QQQQOQ0 = require("silly-datetime"),
  OO0QO = QQQQOQ0.format(new Date(), "YYYY-MM-DD"),
  QO$QQO = Math.round(new Date().getTime() / 1000).toString(),
  OQOQOQQ = Math.round(new Date().getTime()).toString(),
  Q$OO0Q = "vapp.jiaxingren.com",
  O$OQ0$ = "http://" + Q$OO0Q,
  Q0OO0O = 46,
  OO0Q$0 = "FR*r!isE5W",
  Q00Q0O0 = ["5bab3aa283c76634cb49f62e", "63e090d60baf6133b3afc3c3", "5bb0761583c76634cb49f636", "5bbc52a683c76620b667cdc0", "6401a2380baf6133b3afc43e", "5bd028da83c7667e45279b02", "63c7a30c0baf61400d096173"];
async function $0Q$QQ() {
  taskall = [];
  for (let $OOOOO of Q0OQOO) {
    taskall.push(await $OOOOO.getMemberInfo(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  taskall = [];
  for (let $Q0$$O of Q0OQOO) {
    taskall.push(await $Q0$$O.invite(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 查询账号收益变动 ================");
  taskall = [];
  for (let OQO$0O of Q0OQOO) {
    taskall.push(await OQO$0O.getMemberScore(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  taskall = [];
  for (let QQQ00QO of Q0OQOO) {
    taskall.push(await QQQ00QO.article(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行账号签到赚钱 ================");
  taskall = [];
  for (let $Q$ of Q0OQOO) {
    taskall.push(await $Q$.signin(2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行浏览资讯得金 ================");
  taskall = [];
  for (let OOQ0QOO of Q0OQOO) {
    taskall.push(await OOQ0QOO.task(1031, "浏览新闻", 2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行分享资讯得金 ================");
  taskall = [];
  for (let Q0O0Q0O of Q0OQOO) {
    taskall.push(await Q0O0Q0O.task(1032, "分享资讯", 2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行资讯点赞得金 ================");
  taskall = [];
  for (let QQ000O of Q0OQOO) {
    taskall.push(await QQ000O.task(1034, "资讯点赞", 2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
  DoubleLog("\n================ 执行本地服务得金 ================");
  taskall = [];
  for (let OO$0O$ of Q0OQOO) {
    taskall.push(await OO$0O$.task(1035, "本地服务", 2000));
    await $.wait(1000);
  }
  await Promise.all(taskall);
}
class Q0$OO$ {
  constructor(OQQ00) {
    this.index = ++$O$Q0$;
    this.ck = OQQ00.split("&");
    this.sessionid = "64cadc8afea1e416b173aaee";
    this.requestid = O$O$$();
    this.xtenantid = "46";
    this.refcode = "GG449V";
  }
  async ["getMemberInfo"]($QOO0 = 2000) {
    return new Promise(QQ0QOO => {
      {
        let OOO0$ = {
          "url": O$OQ0$ + "/api/user_mumber/account_detail",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/account_detail&&" + this.sessionid + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          }
        };
        $.get(OOO0$, async (Q$QO$$, QQ00QO0, O00O00Q) => {
          try {
            if (Q$QO$$) $.logErr(Q$QO$$);else {
              {
                let OQ0O00Q = JSON.parse(O00O00Q);
                OQ0O00Q.code == 0 ? (this.userid = OQ0O00Q.data.rst.id, this.usermobile = OQ0O00Q.data.rst.mobile, this.username = OQ0O00Q.data.rst.nick_name, DoubleLog("\n ✅ 【" + this.index + "】用户信息: " + OQ0O00Q.data.rst.mobile + "，推荐码：" + OQ0O00Q.data.rst.ref_code)) : DoubleLog("\n ❌ 【" + this.index + "】用户信息: " + OQ0O00Q.msg);
              }
            }
          } catch (Q0OQQQ) {
            $.logErr(Q0OQQQ, QQ00QO0);
          } finally {
            QQ0QOO();
          }
        }, $QOO0);
      }
    });
  }
  async ["getMemberScore"](OO0O00Q = 2000) {
    return new Promise(QO$O$0 => {
      let O0$QQ$ = {
        "url": O$OQ0$ + "/api/user_mumber/account_detail",
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/account_detail&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        }
      };
      $.get(O0$QQ$, async ($$QQQ, QQ$$QQ, $O0$) => {
        try {
          if ($$QQQ) $.logErr($$QQQ);else {
            let $0000Q = JSON.parse($O0$);
            if ($0000Q.code == 0) DoubleLog("\n ✅ 【" + this.index + "】收益信息: 拥有：" + $0000Q.data.rst.total_integral + "积分，用户等级：" + $0000Q.data.rst.grade + "��");else {
              DoubleLog("\n ❌ 【" + this.index + "】收益信息: " + $0000Q.message);
            }
          }
        } catch (OO0QOQ0) {
          $.logErr(OO0QOQ0, QQ$$QQ);
        } finally {
          QO$O$0();
        }
      }, OO0O00Q);
    });
  }
  async ["signin"](OOOQO = 2000) {
    return new Promise(OOOQQQO => {
      {
        let QQ0OOQ0 = {
          "url": O$OQ0$ + "/api/user_mumber/numberCenter?is_new=1",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/numberCenter&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          }
        };
        $.get(QQ0OOQ0, async ($$QOQQ, O$00$, Q00O0$) => {
          try {
            if ($$QOQQ) $.logErr($$QOQQ);else {
              {
                let $$$OO = JSON.parse(Q00O0$);
                if ($$$OO.code == 0) {
                  {
                    if ($$$OO.data.daily_sign_info.daily_sign_list && Array.isArray($$$OO.data.daily_sign_info.daily_sign_list)) {
                      for (let OQO$$Q = 0; OQO$$Q < $$$OO.data.daily_sign_info.daily_sign_list.length; OQO$$Q++) {
                        let OQQQ0OQ = $$$OO.data.daily_sign_info.daily_sign_list[OQO$$Q];
                        if (OQQQ0OQ.date == OO0QO) {
                          if (OQQQ0OQ.signed == true) {
                            DoubleLog("\n ❌ 【" + this.index + "】签到信息: " + OO0QO + " 已经执行签到，跳过。");
                          } else await this.open_signin(2000);
                        }
                      }
                    }
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】签到信息: " + $$$OO.message);
              }
            }
          } catch (O00O0O) {
            $.logErr(O00O0O, O$00$);
          } finally {
            OOOQQQO();
          }
        }, OOOQO);
      }
    });
  }
  async ["open_signin"](OOQQQ0 = 2000) {
    return new Promise(QQQ0 => {
      let O0Q0QOO = {
        "url": O$OQ0$ + "/api/user_mumber/sign",
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/sign&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        }
      };
      $.get(O0Q0QOO, async (Q$0O$, Q$$QQO, Q0O000O) => {
        try {
          if (Q$0O$) $.logErr(Q$0O$);else {
            let Q0OOOO = JSON.parse(Q0O000O);
            Q0OOOO.code == 0 ? DoubleLog("\n ✅ 【" + this.index + "】签到成功: 完成获得奖励 " + Q0OOOO.data.signIntegral + " 积分") : DoubleLog("\n ❌ 【" + this.index + "】签到失败: " + Q0OOOO.message);
          }
        } catch (Q$0Q0) {
          $.logErr(Q$0Q0, Q$$QQO);
        } finally {
          QQQ0();
        }
      }, OOQQQ0);
    });
  }
  async ["task"](Q$OQO0, $$000$, OOQ$$0 = 2000) {
    return new Promise(OQQQ00 => {
      {
        let OQOOQOQ = {
          "url": O$OQ0$ + "/api/user_mumber/numberCenter",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/numberCenter&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          }
        };
        $.get(OQOOQOQ, async (OQ0OQ00, O0O000O, O$$O$) => {
          try {
            {
              if (OQ0OQ00) $.logErr(OQ0OQ00);else {
                let O00QQO0 = JSON.parse(O$$O$);
                if (O00QQO0.code == 0) {
                  if (O00QQO0.data.rst.user_task_list && Array.isArray(O00QQO0.data.rst.user_task_list)) for (let O$0$QO = 0; O$0$QO < O00QQO0.data.rst.user_task_list.length; O$0$QO++) {
                    let QQQQOO = O00QQO0.data.rst.user_task_list[O$0$QO];
                    if (QQQQOO.id === Q$OQO0) {
                      let $0$$ = Number(QQQQOO.frequency) - Number(QQQQOO.finish_times);
                      if (QQQQOO.completed === 1) DoubleLog("\n ❌ 【" + this.index + "��" + $$000$ + ": " + QQQQOO.finish_times + "/" + QQQQOO.frequency + " 该任务今天已达上限。");else {
                        if (QQQQOO.id === 1031) for (let QO000OO = 1; QO000OO < $0$$ && QO000OO < this.nacticleList.length; QO000OO++) {
                          await this.read(this.nacticleList[QO000OO].id, QO000OO, QQQQOO.frequency, 2000);
                          await $.wait(1500);
                        } else {
                          if (QQQQOO.id === 1032) {
                            for (let Q0O0O0 = 1; Q0O0O0 < $0$$ && Q0O0O0 < this.nacticleList.length; Q0O0O0++) {
                              await this.share(this.nacticleList[Q0O0O0].id, Q0O0O0, QQQQOO.frequency, 2000);
                            }
                          } else {
                            if (QQQQOO.id === 1044) for (let Q$$Q$Q = 1; Q$$Q$Q < $0$$ && Q$$Q$Q < this.nacticleList.length; Q$$Q$Q++) {
                              await this.comment(this.nacticleList[Q$$Q$Q].id, Q$$Q$Q, QQQQOO.frequency, 2000);
                              await $.wait(1500);
                            } else {
                              if (QQQQOO.id === 1034) {
                                for (let $00000 = 1; $00000 < $0$$ && $00000 < this.nacticleList.length; $00000++) {
                                  await this.like(this.nacticleList[$00000].id, $00000, QQQQOO.frequency, 2000);
                                  await $.wait(1500);
                                }
                              } else {
                                if (QQQQOO.id === 1035) for (let QOQ0OO0 = 1; QOQ0OO0 < $0$$ && QOQ0OO0 < this.nacticleList.length; QOQ0OO0++) {
                                  await this.local(2000);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】浏览资讯: " + O00QQO0.message);
              }
            }
          } catch (QQQ$QO) {
            $.logErr(QQQ$QO, O0O000O);
          } finally {
            OQQQ00();
          }
        }, OOQ$$0);
      }
    });
  }
  async ["article"](Q$O$QQ = 2000) {
    return new Promise(Q$Q000 => {
      let O0QQ = {
        "url": O$OQ0$ + "/api/article/channel_list?channel_id=" + Q00Q0O0[Math.floor(Math.random() * Q00Q0O0.length)] + "&isDiFangHao=false&is_new=1&list_count=" + Math.floor(Math.random() * 5 + 1) * 10 + "&size=10&start=" + Date.now(),
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/article/channel_list&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        }
      };
      $.get(O0QQ, async (QO0QOOQ, QQOQ0, OQ00OQ) => {
        try {
          {
            if (QO0QOOQ) $.logErr(QO0QOOQ);else {
              let QO0Q00Q = JSON.parse(OQ00OQ);
              if (QO0Q00Q.code == 0) {
                {
                  this.nacticleList = QO0Q00Q.data.article_list;
                  if (QO0Q00Q.data.article_list && Array.isArray(QO0Q00Q.data.article_list)) for (let $Q00O = 0; $Q00O < QO0Q00Q.data.article_list.length; $Q00O++) {
                    this.acticleList = QO0Q00Q.data.article_list[$Q00O];
                  }
                }
              } else DoubleLog("\n ❌ 【" + this.index + "】浏览资讯: " + QO0Q00Q.message);
            }
          }
        } catch (Q00O000) {
          $.logErr(Q00O000, QQOQ0);
        } finally {
          Q$Q000();
        }
      }, Q$O$QQ);
    });
  }
  async ["read"]($O$, OQQ0000, QQQ0Q, O$00Q0 = 2000) {
    return new Promise(QQOO0Q0 => {
      {
        let Q$Q$0O = {
          "url": O$OQ0$ + "/api/article/detail?id=" + $O$,
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/article/detail&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          }
        };
        $.get(Q$Q$0O, async ($OOOQ$, OQ$$QQ, Q$O$QO) => {
          try {
            if ($OOOQ$) $.logErr($OOOQ$);else {
              let OQ0OOQ = JSON.parse(Q$O$QO);
              OQ0OOQ.code == 0 ? DoubleLog("\n ✅ 【" + this.index + "】浏览任务: 完成浏览 " + OQQ0000 + "/" + QQQ0Q + " 该任务") : DoubleLog("\n ❌ 【" + this.index + "】浏览任务: " + OQ0OOQ.message);
            }
          } catch ($$0$QQ) {
            $.logErr($$0$QQ, OQ$$QQ);
          } finally {
            QQOO0Q0();
          }
        }, O$00Q0);
      }
    });
  }
  async ["share"](O0$O0Q, OOQOQ$, Q0O00, $$QQ0O = 2000) {
    return new Promise(OQOOQQ0 => {
      {
        let $0$OO = {
          "url": O$OQ0$ + "/api/user_mumber/doTask",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/doTask&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          },
          "body": "memberType=3&member_type=3&target_id=122411"
        };
        $.post($0$OO, async (Q000Q0Q, $$QO0O, $0$O$O) => {
          try {
            if (Q000Q0Q) $.logErr(Q000Q0Q);else {
              let O0O0$0 = JSON.parse($0$O$O);
              if (O0O0$0.code == 0) {
                DoubleLog("\n ✅ 【" + this.index + "】分享任务: " + O0$O0Q + "完成分享 " + OOQOQ$ + "/" + Q0O00 + " 该任务");
              } else DoubleLog("\n ❌ 【" + this.index + "】分享任务: " + O0O0$0.message);
            }
          } catch (Q0OQQ0Q) {
            $.logErr(Q0OQQ0Q, $$QO0O);
          } finally {
            OQOOQQ0();
          }
        }, $$QQ0O);
      }
    });
  }
  async ["comment"](QOOOQ00, QOQ$$$, OQ000QO, Q00OQQ = 2000) {
    return new Promise(O$Q0$Q => {
      {
        let $$$QOO = {
          "url": O$OQ0$ + "/api/comment/create",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/comment/create&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          },
          "body": "channel_article_id=" + QOOOQ00 + "&content=1"
        };
        $.post($$$QOO, async (QQQOQ0, O0O00OQ, QOOO0OO) => {
          try {
            if (QQQOQ0) $.logErr(QQQOQ0);else {
              let O0$00 = JSON.parse(QOOO0OO);
              O0$00.code == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】评论任务: 去评论：" + this.acticleList.list_title), await $.wait(1000), DoubleLog("\n ✅ 【" + this.index + "】评论任务: 完成分享 " + QOQ$$$ + "/" + OQ000QO + " 该任务")) : DoubleLog("\n ❌ 【" + this.index + "】评论任务: " + O0$00.message);
            }
          } catch (QQQ000O) {
            $.logErr(QQQ000O, O0O00OQ);
          } finally {
            O$Q0$Q();
          }
        }, Q00OQQ);
      }
    });
  }
  async ["like"](Q0OOOQ0, OOOO$, O0QOQQ0, $0$O0Q = 2000) {
    return new Promise(Q00O00Q => {
      {
        let OO$0$$ = {
          "url": O$OQ0$ + "/api/favorite/like",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/favorite/like&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          },
          "body": "action=true&id=" + Q0OOOQ0
        };
        $.post(OO$0$$, async (Q0QQ00O, OQQ$0Q, OQO0O0Q) => {
          try {
            if (Q0QQ00O) $.logErr(Q0QQ00O);else {
              {
                let QQ$0QO = JSON.parse(OQO0O0Q);
                QQ$0QO.code == 0 ? DoubleLog("\n ✅ 【" + this.index + "】点赞任务: 完成分享 " + OOOO$ + "/" + O0QOQQ0 + " 该任务") : DoubleLog("\n ❌ 【" + this.index + "】点赞任务: " + QQ$0QO.message);
              }
            }
          } catch (O00OQQQ) {
            $.logErr(O00OQQQ, OQQ$0Q);
          } finally {
            Q00O00Q();
          }
        }, $0$O0Q);
      }
    });
  }
  async ["local"](QQOQO = 2000) {
    return new Promise(O0OQO$ => {
      let Q0Q0O = {
        "url": O$OQ0$ + "/api/user_mumber/doTask",
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/doTask&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        },
        "body": "member_type=6&memberType=6"
      };
      $.post(Q0Q0O, async (Q0O$O, O$QO, O00O00) => {
        try {
          {
            if (Q0O$O) $.logErr(Q0O$O);else {
              {
                let QOQOQOO = JSON.parse(O00O00);
                if (QOQOQOO.code == 0) DoubleLog("\n ✅ 【" + this.index + "】服务任务: 完成获得 50 积分");else {
                  DoubleLog("\n ❌ 【" + this.index + "】服务任务: " + QOQOQOO.message);
                }
              }
            }
          }
        } catch (QOO0Q$) {
          $.logErr(QOO0Q$, O$QO);
        } finally {
          O0OQO$();
        }
      }, QQOQO);
    });
  }
  async ["invite"](Q$0$$ = 2000) {
    return new Promise($OOOQQ => {
      let QQ00Q00 = {
        "url": O$OQ0$ + "/api/account/update_ref_code",
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/account/update_ref_code&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        },
        "body": "ref_code=" + this.refcode
      };
      $.post(QQ00Q00, async ($$QOOQ, QQ00OQO, OOOO$$) => {
        try {
          if ($$QOOQ) $.logErr($$QOOQ);else {
            let QQO0$0 = JSON.parse(OOOO$$);
            if (QQO0$0.code == 0) {} else {}
          }
        } catch ($$0QO$) {
          $.logErr($$0QO$, QQ00OQO);
        } finally {
          $OOOQQ();
        }
      }, Q$0$$);
    });
  }
  async ["task1"](QOQO0QQ = 2000) {
    return new Promise(Q$00O => {
      {
        let $$O$0 = {
          "url": O$OQ0$ + "/api/user_mumber/numberCenter",
          "headers": {
            "Host": Q$OO0Q,
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-SESSION-ID": this.ck[0],
            "X-REQUEST-ID": this.requestid,
            "X-TIMESTAMP": OQOQOQQ,
            "X-SIGNATURE": CryptoJS.SHA256("/api/user_mumber/numberCenter&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
            "Cache-Control": "no-cache",
            "X-TENANT-ID": this.xtenantid,
            "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
          }
        };
        $.get($$O$0, async (O0O0QO, $0QOQQ, QQ0O0QO) => {
          try {
            {
              if (O0O0QO) $.logErr(O0O0QO);else {
                let O00$Q = JSON.parse(QQ0O0QO);
                if (O00$Q.code == 0) {
                  if (O00$Q.data.rst.user_task_list && Array.isArray(O00$Q.data.rst.user_task_list)) for (let $Q$0O$ = 0; $Q$0O$ < O00$Q.data.rst.user_task_list.length; $Q$0O$++) {
                    {
                      let Q0Q$Q$ = O00$Q.data.rst.user_task_list[$Q$0O$];
                      console.log(Q0Q$Q$);
                    }
                  }
                } else DoubleLog("\n ❌ 【" + this.index + "】浏览资讯: " + O00$Q.message);
              }
            }
          } catch ($QQ$O) {
            $.logErr($QQ$O, $0QOQQ);
          } finally {
            Q$00O();
          }
        }, QOQO0QQ);
      }
    });
  }
  async ["newsOrder"](OOQ0QQ0 = 2000) {
    return new Promise(Q$$OQ$ => {
      let $$0000 = CryptoJS.SHA256("/api/aosbase/_auth_appuserinit&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
        QQ$0QQ = {
          "url": "https://yapi.y-h5.iyunxh.com/api/aosbase/_auth_appuserinit",
          "headers": {
            "Host": "yapi.y-h5.iyunxh.com",
            "Connection": "Keep-Alive",
            "Content-Type": "application/json",
            "X-Requested-With": "com.hoge.android.app.hdd",
            "Access-Api-Signature": "jiaxing;SbRCv9e7nG3WnJYAXaa8IWuKUF2luddr;1691017873225;5a1dd6c43438f5dfa643b2c3bb967d73",
            "Access-T-Id-In": "41",
            "Access-T-Id": "41",
            "Access-Api-Dt": "0803d210ef48d3e8851cae9329bf719fd0af",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.0.4;native_app",
            "referer": "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=140&isNeedLogin=false"
          },
          "body": "{\"app_user_token\":\"" + this.ck[0] + "\",\"appid\":\"jiaxing\",\"noncestr\":\"zo3qf3\",\"phone\":\"" + this.usermobile + "\",\"portrait_url\":\"https://image.jiaxingren.com/assets/20230111/1673415754241_63be4c4a0baf613fc40a952f.jpeg\",\"timestamp\":" + QO$QQO + ",\"user_id\":\"" + this.userid + "\",\"user_name\":\"" + this.username + "\",\"wx_openid\":\"\",\"wx_unionid\":\"\",\"signature\":\"" + $$0000 + "\"}"
        };
      console.log(QQ$0QQ);
      $.post(QQ$0QQ, async ($$Q$QO, OQQOO0Q, $$0QOQ) => {
        try {
          if ($$Q$QO) $.logErr($$Q$QO);else {
            let OOQO0O0 = JSON.parse($$0QOQ);
            console.log(OOQO0O0);
          }
        } catch (OO0OOQ) {
          $.logErr(OO0OOQ, OQQOO0Q);
        } finally {
          Q$$OQ$();
        }
      }, OOQ0QQ0);
    });
  }
  async ["newsOrder1"](OQOQQ$ = 2000) {
    return new Promise(O0$0QO => {
      let $$$000 = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/_optionp_list?activity_id=140",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "Keep-Alive",
          "X-Requested-With": "com.hoge.android.app.hdd",
          "Access-T-Id-In": "41",
          "Access-T-Id": "41",
          "Access-User-Id": "13407089",
          "User-Agent": OO0$0O(),
          "origin": "https://jiaxing.y-h5.iyunxh.com",
          "referer": "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1&id=140&isNeedLogin=false"
        }
      };
      $.get($$$000, async (OOO0O0, $$QO, QOOQOQQ) => {
        try {
          if (OOO0O0) $.logErr(OOO0O0);else {
            let $O$0$$ = JSON.parse(QOOQOQQ);
            if ($O$0$$.code == 0) {
              {
                if ($O$0$$.data && Array.isArray($O$0$$.data)) {
                  for (let O$Q0O0 = 0; O$Q0O0 < $O$0$$.data.length; O$Q0O0++) {
                    {
                      let $$0OOQ = $O$0$$.data[O$Q0O0];
                      DoubleLog("\n ✅ 【" + this.index + "】获取任务: " + $$0OOQ.title + "任务获取成功");
                      await $.wait(1500);
                      await this.open_newsOrder($$0OOQ.id, $$0OOQ.activity_id, 2000);
                      break;
                    }
                  }
                }
              }
            } else DoubleLog("\n ❌ 【" + this.index + "】获取任务: " + $O$0$$.msg);
          }
        } catch (Q$Q$Q$) {
          $.logErr(Q$Q$Q$, $$QO);
        } finally {
          O0$0QO();
        }
      }, OQOQQ$);
    });
  }
  async ["open_newsOrder"](O$OO$, O0QQOQO, OQ0QQ0O = 2000) {
    return new Promise($0$0O0 => {
      let Q$0$$$ = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aoslearnfoot/optionp_detail?id=" + O$OO$,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "Keep-Alive",
          "X-Requested-With": "com.hoge.android.app.hdd",
          "Access-T-Id-In": "41",
          "Access-User-Id": "13410821",
          "Access-T-Id": "41",
          "Access-Token": "f6b23e4cc4170e272f296f8aba818ce9ZXhwPTE3MDAyOTM3NzImaWF0PTE2OTAyOTM3NzImbmJmPTE2NjY5NDM4NTUmanRpPVVqa285NyZkYXRhJTVCdF9pZCU1RD00MSZkYXRhJTVCdF9pZF9pbiU1RD00MSZkYXRhJTVCdXNlcl9pZCU1RD0xMzQxMDgyMSZkYXRhJTVCdXNlcl9uYW1lJTVEPSVFOCVBRiVCQiVFNSU4RiU4Ql9HR0JBOUsmZGF0YSU1Qm5hbWUlNUQ9JUU4JUFGJUJCJUU1JThGJThCX0dHQkE5Sw==",
          "User-Agent": OO0$0O(),
          "origin": "https://jiaxing.y-h5.iyunxh.com",
          "referer": "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + O$OO$ + "&activity_id=" + O0QQOQO
        }
      };
      $.get(Q$0$$$, async (Q0$O0Q, $O$Q$O, $O$0O) => {
        try {
          if (Q0$O0Q) $.logErr(Q0$O0Q);else {
            let QOO0OQO = JSON.parse($O$0O);
            if (QOO0OQO.code == 0) {
              QOO0OQO.data.user_undone_num == 0 ? DoubleLog("\n ❌ 【" + this.index + "】红包文章: 共 " + QOO0OQO.data.task_num + " 次,已阅 " + QOO0OQO.data.user_done_num + " 次,还剩 " + QOO0OQO.data.user_undone_num + " ��") : (DoubleLog("\n ✅ 【" + this.index + "】红包文章: 共 " + QOO0OQO.data.task_num + " 次,已阅 " + QOO0OQO.data.user_done_num + " 次,还剩 " + QOO0OQO.data.user_undone_num + " ��"), await $.wait(1500), await this.open_newsOrder_donenum(QOO0OQO.data.id, QOO0OQO.data.m_id, QOO0OQO.data.activity_id, QOO0OQO.data.task_num, 2000));
            } else DoubleLog("\n ❌ 【" + this.index + "】获取任务: " + QOO0OQO.msg);
          }
        } catch (QOO0QO) {
          $.logErr(QOO0QO, $O$Q$O);
        } finally {
          $0$0O0();
        }
      }, OQ0QQ0O);
    });
  }
  async ["open_newsOrder_donenum"]($O$$Q, Q00QQQQ, Q0000O, $OOO, QQ0OO0Q = 2000) {
    return new Promise(O00Q0QQ => {
      let QQQ0OQ = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/_task_list?offset=0&count=" + $OOO + "&module_id=" + Q00QQQQ + "&activity_id=" + $O$$Q,
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "Keep-Alive",
          "X-Requested-With": "com.hoge.android.app.hdd",
          "Access-T-Id-In": "41",
          "Access-User-Id": "13410821",
          "Access-T-Id": "41",
          "Access-Token": "f6b23e4cc4170e272f296f8aba818ce9ZXhwPTE3MDAyOTM3NzImaWF0PTE2OTAyOTM3NzImbmJmPTE2NjY5NDM4NTUmanRpPVVqa285NyZkYXRhJTVCdF9pZCU1RD00MSZkYXRhJTVCdF9pZF9pbiU1RD00MSZkYXRhJTVCdXNlcl9pZCU1RD0xMzQxMDgyMSZkYXRhJTVCdXNlcl9uYW1lJTVEPSVFOCVBRiVCQiVFNSU4RiU4Ql9HR0JBOUsmZGF0YSU1Qm5hbWUlNUQ9JUU4JUFGJUJCJUU1JThGJThCX0dHQkE5Sw==",
          "User-Agent": OO0$0O(),
          "origin": "https://jiaxing.y-h5.iyunxh.com",
          "referer": "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=" + $O$$Q + "&activity_id=" + Q0000O
        }
      };
      $.get(QQQ0OQ, async (OOQ0OO0, Q$$Q$$, QO$0O$) => {
        try {
          if (OOQ0OO0) $.logErr(OOQ0OO0);else {
            let Q0QQOQ0 = JSON.parse(QO$0O$);
            if (Q0QQOQ0.code == 0) {
              if (Q0QQOQ0.data && Array.isArray(Q0QQOQ0.data)) for (let O$$0Q$ = 0; O$$0Q$ < Q0QQOQ0.data.length; O$$0Q$++) {
                {
                  let Q00OO0O = Q0QQOQ0.data[O$$0Q$];
                  this.task_id = Q00OO0O.id;
                  let $$$OO0 = JSON.parse(Q00OO0O.rule),
                    QQ0QQ0O = $$$OO0.link_url.split("?")[1],
                    O000QQO = QQ0QQ0O.split("&tenantId=")[0],
                    OO$$Q$ = O000QQO.replace(/id=/, "");
                  if (Q00OO0O.user_done == 0) {
                    {
                      DoubleLog("\n ✅ 【" + this.index + "】游览文章: " + Q00OO0O.title);
                      await $.wait(1500);
                      await this.open_newsOrder_detail(OO$$Q$, Q00OO0O.task_record_id, 2000);
                      break;
                    }
                  }
                }
              }
            } else DoubleLog("\n ❌ 【" + this.index + "】阅读文章: " + Q0QQOQ0.msg);
          }
        } catch (OQO00$) {
          $.logErr(OQO00$, Q$$Q$$);
        } finally {
          O00Q0QQ();
        }
      }, QQ0OO0Q);
    });
  }
  async ["open_newsOrder_detail"](O$$0QQ, OQQ0O, OO$$$ = 2000) {
    return new Promise($$$$ => {
      let Q00OOQQ = {
        "url": O$OQ0$ + "/api/article/detail?id=" + O$$0QQ,
        "headers": {
          "Host": Q$OO0Q,
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-SESSION-ID": this.ck[0],
          "X-REQUEST-ID": this.requestid,
          "X-TIMESTAMP": OQOQOQQ,
          "X-SIGNATURE": CryptoJS.SHA256("/api/article/detail&&" + this.ck[0] + "&&" + this.requestid + "&&" + OQOQOQQ + "&&" + OO0Q$0 + "&&" + Q0OO0O).toString(),
          "Cache-Control": "no-cache",
          "X-TENANT-ID": this.xtenantid,
          "X-ACCOUNT-ID": this.useraccountid,
          "User-Agent": "1.3.0;" + this.requestid + ";iPad13,4;IOS;16.2;Appstore"
        }
      };
      $.get(Q00OOQQ, async (OQO$Q0, QOQOQQO, $000O) => {
        try {
          if (OQO$Q0) $.logErr(OQO$Q0);else {
            {
              let OQ$$0$ = JSON.parse($000O);
              OQ$$0$.code == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】红包阅读: 游览ID：" + O$$0QQ + " 成功完成阅读"), await $.wait(1500), await this.open_newsOrder_article(OQQ0O, 2000)) : DoubleLog("\n ❌ 【" + this.index + "】红包阅读: " + OQ$$0$.message);
            }
          }
        } catch (QO$0) {
          $.logErr(QO$0, QOQOQQO);
        } finally {
          $$$$();
        }
      }, OO$$$);
    });
  }
  async ["open_newsOrder_article"]($OO$O$ = 2000) {
    return new Promise($0OOOO => {
      let $$0OQ = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_create",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "Keep-Alive",
          "Access-User-Id": "13410821",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.0.4;native_app",
          "Access-Token": "f6b23e4cc4170e272f296f8aba818ce9ZXhwPTE3MDAyOTM3NzImaWF0PTE2OTAyOTM3NzImbmJmPTE2NjY5NDM4NTUmanRpPVVqa285NyZkYXRhJTVCdF9pZCU1RD00MSZkYXRhJTVCdF9pZF9pbiU1RD00MSZkYXRhJTVCdXNlcl9pZCU1RD0xMzQxMDgyMSZkYXRhJTVCdXNlcl9uYW1lJTVEPSVFOCVBRiVCQiVFNSU4RiU4Ql9HR0JBOUsmZGF0YSU1Qm5hbWUlNUQ9JUU4JUFGJUJCJUU1JThGJThCX0dHQkE5Sw==",
          "Content-Type": "application/json",
          "Access-T-Id": "41"
        },
        "body": "{\"task_id\":" + this.task_id + "}"
      };
      $.post($$0OQ, async (Q00Q$Q, Q$00$Q, $OOQ$Q) => {
        try {
          {
            if (Q00Q$Q) $.logErr(Q00Q$Q);else {
              let O$00OO = JSON.parse($OOQ$Q);
              O$00OO.code == 0 ? await this.open_newsOrder_record(O$00OO.data.task_record_id, 2000) : DoubleLog("\n ❌ 【" + this.index + "】红包阅读: " + O$00OO.msg);
            }
          }
        } catch (OQ0$$$) {
          $.logErr(OQ0$$$, Q$00$Q);
        } finally {
          $0OOOO();
        }
      }, $OO$O$);
    });
  }
  async ["open_newsOrder_record"]($0OQ00, Q$OOO = 2000) {
    return new Promise(O0QOQQ => {
      let OOQQ$ = {
        "url": "https://yapi.y-h5.iyunxh.com/api/aosbasemodule/task_done",
        "headers": {
          "Host": "yapi.y-h5.iyunxh.com",
          "Connection": "Keep-Alive",
          "Content-Length": "132",
          "Access-User-Id": "13410821",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.0.4;native_app",
          "Access-Token": "f6b23e4cc4170e272f296f8aba818ce9ZXhwPTE3MDAyOTM3NzImaWF0PTE2OTAyOTM3NzImbmJmPTE2NjY5NDM4NTUmanRpPVVqa285NyZkYXRhJTVCdF9pZCU1RD00MSZkYXRhJTVCdF9pZF9pbiU1RD00MSZkYXRhJTVCdXNlcl9pZCU1RD0xMzQxMDgyMSZkYXRhJTVCdXNlcl9uYW1lJTVEPSVFOCVBRiVCQiVFNSU4RiU4Ql9HR0JBOUsmZGF0YSU1Qm5hbWUlNUQ9JUU4JUFGJUJCJUU1JThGJThCX0dHQkE5Sw==",
          "Content-Type": "application/json",
          "Access-T-Id": "41"
        },
        "body": "{\"task_record_id\":" + $0OQ00 + ",\"collect_info\":\"\",\"afs_tokenid\":\"c99e9da75e59a01d5937f0c05c4c6116\",\"device_token\":\"16902937644403447556\"}"
      };
      $.post(OOQQ$, async (O$O$OQ, O$OO, O$OQOQ) => {
        try {
          if (O$O$OQ) $.logErr(O$O$OQ);else {
            {
              let Q00O0Q = JSON.parse(O$OQOQ);
              if (Q00O0Q.code == 0) DoubleLog("\n ✅ 【" + this.index + "】红包阅读: " + Q00O0Q.msg);else {
                DoubleLog("\n ❌ 【" + this.index + "】红包阅读: " + Q00O0Q.msg);
              }
            }
          }
        } catch (QQ0QQOQ) {
          $.logErr(QQ0QQOQ, O$OO);
        } finally {
          O0QOQQ();
        }
      }, Q$OOO);
    });
  }
  async ["integralMallOrder"](QOQ0QQ = 2000) {
    return new Promise($0OQ$Q => {
      {
        let $OQQO0 = {
          "url": "https://jfwechat.chengquan.cn/integralMallOrder/orderNow",
          "headers": {
            "Host": "jfwechat.chengquan.cn",
            "Connection": "Keep-Alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "accept": "application/json",
            "ugrdxsil": "72599960872199415_922_xQYXj9",
            "x-requested-with": "XMLHttpRequest",
            "User-Agent": OO0$0O(),
            "origin": "https://jfwechat.chengquan.cn",
            "referer": "https://jfwechat.chengquan.cn/integralMall/productDetail?productId=" + goodsorderNow
          },
          "form": "{ productId: " + goodsorderNow + ", exchangeNum: '1', rechargeNumber: '', exchangeAccount: '' }"
        };
        console.log($OQQO0);
        $.post($OQQO0, async (O0$0Q, $$O0OO, $0Q0QQ) => {
          try {
            {
              if (O0$0Q) $.logErr(O0$0Q);else {
                {
                  let Q00$$Q = JSON.parse($0Q0QQ);
                  console.log(Q00$$Q);
                }
              }
            }
          } catch (O0O0OQ0) {
            $.logErr(O0O0OQ0, $$O0OO);
          } finally {
            $0OQ$Q();
          }
        }, QOQ0QQ);
      }
    });
  }
}
!(async () => {
  if (!(await O0Q0Q())) return;
  DoubleLog("\n🎉会员注册：http://www.lekebo.top");
  DoubleLog("\n🎉交流 Q群：104062430、317929242");
  await $OOQO0();
  console.log("\n================ 本次运行脚本结束 ===============");
})().catch(OO0OQ00 => console.log(OO0OQ00)).finally(() => $.done());
async function O0Q0Q() {
  if (QOO$0) {
    let OQ000QQ = envSplitor[0];
    for (let OOQQQ0Q of envSplitor) if (QOO$0.indexOf(OOQQQ0Q) > -1) {
      OQ000QQ = OOQQQ0Q;
      break;
    }
    for (let QQ0OQOO of QOO$0.split(OQ000QQ)) QQ0OQOO && Q0OQOO.push(new Q0$OO$(QQ0OQOO));
    userCount = Q0OQOO.length;
  } else {
    {
      console.log("\n\n 温馨提示：您没有建立系统变量或者没填写参数\n\n");
      return;
    }
  }
  return true;
}
async function $OOQO0() {
  let $$O$OQ = [],
    QOQQQQ0 = ($.isNode() ? process.env.lekebo_user_token : $.getdata("lekebo_user_token")) || "",
    $O0OQO = QOQQQQ0.includes("@") ? "@" : "\n",
    QQ$$Q$ = QOQQQQ0.split($O0OQO);
  for (let O$$ of QQ$$Q$) if (O$$) $$O$OQ.push(O$$);
  if ($$O$OQ.length == 0) {
    console.log("\n\n 温馨提示：您没有建立平台参数或没有填写账号密码\n\n");
    return false;
  }
  console.log("\n================ 平台共 " + $$O$OQ.length + " 个会员 ================ \n\n 脚本执行✌北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " ");
  versionupdate == 1 ? (await QOQ0OQ(), console.log("\n================ 版本对比检查更新 ==============="), O00OOOQ != OOQ$$ ? (console.log("\n 当前版本：" + OOQ$$ + "，更新时间：" + Q00Q00Q), console.log("\n 最新版本：" + O00OOOQ), console.log("\n 更新信息：" + $OOO$0)) : console.log("\n 版本信息：" + OOQ$$ + " ，已是最新版本无需更新开始执行脚本")) : (console.log("\n================ 版本对比检查更新 ==============="), console.log("\n 当前版本:" + OOQ$$ + "，更新时间:" + Q00Q00Q + "，已设不更新版本"));
  console.log("\n================ 脚本会员登陆检查 ===============");
  for ($O$Q0$ = 0; $O$Q0$ < $$O$OQ.length; $O$Q0$++) {
    let $0QQ0Q = $$O$OQ[$O$Q0$].split("&");
    await QQ$$O$($0QQ0Q[0], $0QQ0Q[1], 2000);
  }
}
async function QQ$$O$($O00OO, Q0$0$0, O$Q$OO = 2000) {
  return new Promise(QO0O$ => {
    {
      let $Q$0QQ = {
        "url": "http://www.lekebo.top/api/index.php?mod=user&act=login",
        "headers": {
          "Host": "www.lekebo.top",
          "Connection": "Keep-Alive",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.125 Safari/537.36"
        },
        "body": "username=" + $O00OO + "&code=&checkcode=0&password=" + Q0$0$0
      };
      $.post($Q$0QQ, async (OO00$$, Q0OQ$$, OQO00) => {
        try {
          {
            if (OO00$$) {
              $.logErr(OO00$$);
            } else {
              {
                let QOOQ0$ = JSON.parse(OQO00);
                if (QOOQ0$.code == 1) {
                  let Q$0OQ0 = QQ$O0O(QOOQ0$.data.userdate * 1000);
                  if (QOOQ0$.data.groupid == 1) QOOQ0$.data.userdate > 0 ? (DoubleLog("\n 普通用户: " + QOOQ0$.data.username + "，脚本时间:" + Q$0OQ0), Q0OQOO.length > 10 ? (DoubleLog("\n================ 执行脚本 " + Q0OQOO.length + " 个账号 ================"), DoubleLog("\n\n 温馨提示：您的账户超出作者指定的数量，请升级此账号\n")) : (DoubleLog("\n================ 执行脚本 " + Q0OQOO.length + " 个账号 ================"), await $0Q$QQ())) : (DoubleLog("\n 普通用户: " + QOOQ0$.data.username + "，脚本时间:" + QQ$O0O(QO$QQO * 1000)), DoubleLog("\n================ 执行脚本 " + Q0OQOO.length + " 个账号 ================"), DoubleLog("\n\n 温馨提示：您是本站普通用户无法运行，请升级此账号\n"));else QOOQ0$.data.groupid == 2 && (QOOQ0$.data.userdate > 0 ? (DoubleLog("\n 会员用户: " + QOOQ0$.data.username + "，脚本时间:" + Q$0OQ0), Q0OQOO.length > 100 ? (DoubleLog("\n================ 脚本共 " + Q0OQOO.length + " 个账号 ================"), DoubleLog("\n\n 温馨提示：您的账户超出作者指定的数量，请升级此账号\n")) : (DoubleLog("\n================ 脚本共 " + Q0OQOO.length + " 个账号 ================"), await $0Q$QQ())) : (DoubleLog("\n 会员用户: " + QOOQ0$.data.username + "，脚本时间:" + QQ$O0O(QO$QQO * 1000)), Q0OQOO.length > 10 ? (DoubleLog("\n================ 脚本共 " + Q0OQOO.length + " 个账号 ================"), DoubleLog("\n\n 温馨提示：您的账户超出作者指定的数量，请升级此账号\n")) : (DoubleLog("\n================ 脚本共 " + Q0OQOO.length + " 个账号 ================"), await $0Q$QQ())));
                } else DoubleLog("\n 登陆错误: " + QOOQ0$.message), DoubleLog("\n================ 开始执行会员脚本 ==============="), DoubleLog("\n\n 温馨提示：您的并没有登陆不能执行任务，请联系作者\n");
              }
            }
          }
        } catch (O0QOO$) {
          $.logErr(O0QOO$, Q0OQ$$);
        } finally {
          QO0O$();
        }
      }, O$Q$OO);
    }
  });
}
function QOQ0OQ(OOO$0 = 3000) {
  return new Promise(QQ0Q0$ => {
    let QOQOOOO = {
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_dj.js"
    };
    $.get(QOQOOOO, async (QQOOQO0, Q$0Q$O, Q00QQ0O) => {
      try {
        O00OOOQ = Q00QQ0O.match(/scriptVersion = "([\d\.]+)"/)[1];
        $OOO$0 = Q00QQ0O.match(/update_data = "(.*?)"/)[1];
      } catch (QQOO00O) {
        $.logErr(QQOO00O, Q$0Q$O);
      } finally {
        QQ0Q0$();
      }
    }, OOO$0);
  });
}
function OO0$0O() {
  $.UUID = QQOOQOO(40);
  const Q$0OQO = {
    "167814": "10.1.4",
    "167841": "10.1.6",
    "167853": "10.2.0"
  };
  $.osVersion = OQQQ0O(13, 14) + "." + OQQQ0O(3, 6) + "." + OQQQ0O(1, 3);
  let QQ0OQ0 = "network/" + ["4g", "5g", "wifi"][OQQQ0O(0, 2)];
  $.mobile = "iPhone" + OQQQ0O(9, 13) + "," + OQQQ0O(1, 3);
  $.build = ["167814", "167841", "167853"][OQQQ0O(0, 2)];
  $.appVersion = Q$0OQO[$.build];
  return "jdapp;iPhone;" + $.appVersion + ";" + $.osVersion + ";" + $.UUID + ";M/5.0;" + QQ0OQ0 + ";ADID/;model/" + $.mobile + ";addressid/;appBuild/" + $.build + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + $.osVersion.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function QQOOQOO(QQ$$0$) {
  QQ$$0$ = QQ$$0$ || 32;
  var $Q0O$$ = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    O$0$Q$ = $Q0O$$.length,
    OQOQQQO = "";
  for (i = 0; i < QQ$$0$; i++) OQOQQQO += $Q0O$$.charAt(Math.floor(Math.random() * O$0$Q$));
  return OQOQQQO;
}
function QQOQO0O(QOQ00O, QOOQQQQ = "abcdefhijkmnprstwxyz123456789") {
  QOQ00O = QOQ00O || 32;
  let Q$0O0Q = QOOQQQQ.length,
    QOOO0OQ = "";
  for (let QO0QQOO = 0; QO0QQOO < QOQ00O; QO0QQOO++) QOOO0OQ += QOOQQQQ.charAt(Math.floor(Math.random() * Q$0O0Q));
  return QOOO0OQ;
}
function OQQQ0O(Q0O$$$, $QO$0$) {
  if (arguments.length === 0) return Math.random();
  if (!$QO$0$) $QO$0$ = 10 ** (Math.log(Q0O$$$) * Math.LOG10E + 1 | 0) - 1;
  return Math.floor(Math.random() * ($QO$0$ - Q0O$$$ + 1) + Q0O$$$);
}
function O$O$$() {
  function O0OO$0() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return O0OO$0() + O0OO$0() + "-" + O0OO$0() + "-" + O0OO$0() + "-" + O0OO$0() + "-" + O0OO$0() + O0OO$0() + O0OO$0();
}
function QQ$O0O(O0O$$0) {
  var OQO$0$ = new Date(O0O$$0);
  let QOOO0O = OQO$0$.getFullYear(),
    OQ0Q0$ = OQO$0$.getMonth() + 1 < 10 ? "0" + (OQO$0$.getMonth() + 1) : OQO$0$.getMonth() + 1,
    $0OO$ = OQO$0$.getDate() < 10 ? "0" + OQO$0$.getDate() : OQO$0$.getDate(),
    $O0$O$ = OQO$0$.getHours() < 10 ? "0" + OQO$0$.getHours() : OQO$0$.getHours(),
    O$00OQ = OQO$0$.getMinutes() < 10 ? "0" + OQO$0$.getMinutes() : OQO$0$.getMinutes(),
    Q000OOO = OQO$0$.getSeconds() < 10 ? "0" + OQO$0$.getSeconds() : OQO$0$.getSeconds();
  return QOOO0O + "-" + OQ0Q0$ + "-" + $0OO$ + " " + $O0$O$ + ":" + O$00OQ + ":" + Q000OOO;
}
function O0OO0QQ(QQ0O = +new Date()) {
  if (QQ0O.toString().length == 13) {
    {
      var QQQQQQO = new Date(QQ0O + 28800000);
      return QQQQQQO.toJSON().substr(0, 19).replace("T", " ");
    }
  } else {
    if (QQ0O.toString().length == 10) {
      QQ0O = QQ0O * 1000;
      var QQQQQQO = new Date(QQ0O + 28800000);
      return QQQQQQO.toJSON().substr(0, 19).replace("T", " ");
    }
  }
}
function $Q$OO$($$OO0) {
  if ($$OO0.length == 11) {
    let QO0Q0QO = $$OO0.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return QO0Q0QO;
  } else return $$OO0;
}