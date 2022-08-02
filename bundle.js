(() => {
  // node_modules/@messageformat/runtime/esm/runtime.js
  function _nf(lc) {
    return _nf[lc] || (_nf[lc] = new Intl.NumberFormat(lc));
  }
  function number(lc, value, offset) {
    return _nf(lc).format(value - offset);
  }
  function plural(value, offset, lcfunc, data, isOrdinal) {
    if ({}.hasOwnProperty.call(data, value))
      return data[value];
    if (offset)
      value -= offset;
    var key = lcfunc(value, isOrdinal);
    return key in data ? data[key] : data.other;
  }

  // node_modules/make-plural/plurals.mjs
  function en(n, ord) {
    var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    if (ord)
      return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
    return n == 1 && v0 ? "one" : "other";
  }
  function ru(n, ord) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    if (ord)
      return "other";
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 11 && i100 <= 14) ? "many" : "other";
  }

  // main/src/messages/en.properties
  var x = (value, locale, arg) => {
    return value[arg];
  };
  var en_default = {
    overlay: {
      intro: {
        header: function(d) {
          return "You're the team lead!\nYour team:\n" + d.team;
        },
        difficulty: function(d) {
          return "Difficulty: " + d.difficulty;
        },
        teammate: function(d) {
          return x(d.name, "en", " nominative".trim()) + " specializes in " + d.skills;
        }
      },
      editor: {
        nothing_done: function(d) {
          return "Nothing has been done in this task so far. Ready to work?";
        },
        lots_of_work: function(d) {
          return "The current task still has a lot of work to be done";
        },
        mostly_done: function(d) {
          return "This task is close to being finished";
        },
        almost_there: function(d) {
          return "This task has a little work to be done";
        },
        done: function(d) {
          return "The main code for the task is ready!";
        },
        work_on_task: function(d) {
          return "Work on the current task (1 hr)";
        },
        work_done_1: function(d) {
          return "With a crack of your knuckles, you get to work. After an hour of continuous tapping on your keyboard, you finally reach the point where you can commit";
        },
        work_done_2: function(d) {
          return "Stretching in your chair, you get to work. After an hour of hard refactoring, you finally reach a point where you can commit";
        },
        work_done_3: function(d) {
          return "Taking a sip of coffee, you get to work. After an hour of creating services, you finally reach a point where you can commit";
        },
        work_done_4: function(d) {
          return "Taking a deep breath, you get to work. After an hour of rewriting code, you finally reach a point where you can commit";
        },
        passed_to_review: function(d) {
          return "With a sense of accomplishment, you submit the task for review";
        },
        tests_done: function(d) {
          return "Finding a couple of bugs along the way, you test most of the code. You feel a little calmer";
        },
        qa_instructions_done: function(d) {
          return "You describe the detailed changes made in the task and the areas that need to be thoroughly tested. This should simplify and accelerate the QA process";
        },
        task_done: function(d) {
          return "You've finished your task!";
        },
        action: {
          pass_to_review: function(d) {
            return "Submit task for review";
          },
          write_tests: function(d) {
            return "Write tests (1 hr)";
          },
          write_qa_instructions: function(d) {
            return "Write detailed instructions for QA (1 hr)";
          },
          open_wrike_to_take_new_task: function(d) {
            return "Open Wrike and accept the next one";
          },
          do_something_else: function(d) {
            return "Do something else";
          }
        }
      },
      code_review: {
        look_at_code: {
          bad: function(d) {
            return "You open " + x(d.name, "en", " genitive".trim()) + "'s task with the ever-sluggish GitPub. Honestly, the code looks awful";
          },
          not_too_bad: function(d) {
            return "You open " + x(d.name, "en", " genitive".trim()) + "'s task with the slowly working GitPub. The code looks quite messy";
          },
          ok: function(d) {
            return "You open " + x(d.name, "en", " genitive".trim()) + "'s task with the ever-sluggish GitPub. At first glance, the code looks good";
          }
        },
        passed_to_qa_without_looking: function(d) {
          return "You trust your team. Without thinking much, you approve the code and transfer the task to QA.";
        },
        found_bugs: function(d) {
          return "Thoroughly checking the code, you find several bugs and issues. The task is returned to the developer";
        },
        couldnt_find_bugs: function(d) {
          return "After checking the code for a long time, you didn't find any issues. The task is sent for testing";
        },
        action: {
          pass_to_qa_without_looking: function(d) {
            return "Submit for testing without checking";
          },
          look_at_code: function(d) {
            return "Carefully check the code (1 hr)";
          },
          do_something_else: function(d) {
            return "Do something else";
          }
        }
      },
      standup: {
        you: {
          name: function(d) {
            return "You";
          },
          working_on: function(d) {
            return "Right now, I'm working on " + d.task;
          },
          will_take_next_task: function(d) {
            return "I accept the next task";
          }
        },
        teammate: {
          worked_on: {
            v1: function(d) {
              return "I've worked on";
            },
            v2: function(d) {
              return "I'm still working on";
            },
            v3: function(d) {
              return "I'm stuck on";
            },
            v4: function(d) {
              return "I'm trying to figure out";
            },
            v5: function(d) {
              return "I've been slowly working on";
            },
            v6: function(d) {
              return "I'm still working on";
            },
            v7: function(d) {
              return "I'm trying to understand";
            },
            base: function(d) {
              return d.worked_on + " " + d.task;
            },
            stuck: function(d) {
              return "I'm a little stuck on " + d.worked_on + " " + d.task + ". I'm trying to figure it out";
            },
            finishing_soon: function(d) {
              return d.worked_on + " " + d.task + ", I hope to finish it today";
            }
          },
          finished_all_tasks: {
            v1: function(d) {
              return "I've completed all my tasks, and I'm ready for the next one";
            },
            v2: function(d) {
              return "All my tasks are done. What should I do next?";
            },
            v3: function(d) {
              return "All tasks are done. I'm ready to accept more";
            },
            v4: function(d) {
              return "I've finished all my tasks. What should I work on next?";
            },
            v5: function(d) {
              return "I've completed everything I was working on, and I'm ready for a new task";
            }
          }
        },
        action: {
          continue: function(d) {
            return "Continue";
          },
          suggest_task: function(d) {
            return "Suggest accepting " + d.task + ", estimate: " + d.estimated_time;
          },
          continue_no_free_tasks: function(d) {
            return "No tasks to be done, continue";
          },
          assign_to_yourself: function(d) {
            return "Accept " + d.task + ", estimate: " + d.estimated_time;
          }
        },
        finished: function(d) {
          return "The standup is over, a new working day has begun!";
        }
      },
      calendar: {
        lunch: {
          message: function(d) {
            return "The company canteen was more crowded today than usual. After standing in line, you bought " + d.food + " and enjoyed your relaxing meal. [+Health]";
          },
          food: {
            v1: function(d) {
              return "pasta with chicken";
            },
            v2: function(d) {
              return "a burger with fries";
            },
            v3: function(d) {
              return "a soup";
            },
            v4: function(d) {
              return "pork chops with roasted potatoes";
            },
            v5: function(d) {
              return "a salad";
            },
            v6: function(d) {
              return "a chicken sandwich";
            },
            v7: function(d) {
              return "a few slices of pizza";
            }
          }
        },
        standup: {
          info: function(d) {
            return "At the daily standup, all team members share some info about the work they did the day before and any roadblocks they may face";
          }
        },
        one_on_one: {
          info: function(d) {
            return "At weekly One on One meetings, team members meet their line manager and freely discuss both work and personal issues. This helps them build trust and proactively identify potential problems";
          },
          message: function(d) {
            return "The One on One meeting went well. " + x(d.name, "en", " nominative".trim()) + " shared their feelings about deadlines and work success. You shared a piece of Team Lead wisdom, and " + x(d.name, "en", " nominative".trim()) + " was clearly pleased with it [+Skill]";
          }
        },
        knowledge_sharing: {
          info: function(d) {
            return "Knowledge Sharing is a weekly event where a developer covers a topic that may be useful for their coworkers. Today's meeting is about " + d.topic;
          },
          message: function(d) {
            return "The Knowledge Sharing meeting was very interesting today. You learn about on " + d.topic + " and feel like you can do anything now [+Performance]";
          }
        },
        interview: {
          info: function(d) {
            return "It's your job to participate in interviews with potential candidates, including candidates for other teams.";
          },
          message: function(d) {
            return "That went well. Today's candidate, " + d.candidate_name + ", was pretty interesting.";
          }
        },
        lead_meeting: {
          info: function(d) {
            return "The Team Lead Sync is a weekly meeting where you can quickly communicate with other team leads. You can hear the latest news about what your coworkers are working on and ask questions about cross-functional work";
          },
          message: function(d) {
            return "Nothing particularly interesting happened in this week's sync";
          }
        },
        already_started: function(d) {
          return "This meeting started already, you're late!";
        },
        already_finished: function(d) {
          return "This event has already ended";
        },
        not_started_yet: function(d) {
          return "This event hasn't started yet, you can join it later";
        },
        action: {
          lunch: function(d) {
            return "Take a lunch break (1 hr)";
          },
          standup: function(d) {
            return "Join the standup (1 hr)";
          },
          one_on_one: function(d) {
            return "Join the meeting (1 hr)";
          },
          knowledge_sharing: function(d) {
            return "Join and listen (1 hr)";
          },
          interview: function(d) {
            return "Join the call (2 hrs)";
          },
          lead_meeting: function(d) {
            return "Join the meeting (1 hr)";
          },
          do_something_else: function(d) {
            return "Do something else";
          }
        }
      },
      teammate: {
        action: {
          help: function(d) {
            return "Help " + x(d.name, "en", " dative".trim()) + " with the task (1 hr)";
          }
        },
        helped: function(d) {
          return "Taking a fresh look at " + x(d.name, "en", " genitive".trim()) + "'s task, you quickly find the problem and give them some advice [+Skill]";
        },
        nothing_to_talk_about: function(d) {
          return "I don't have anything to talk to them about right now";
        },
        cant_talk_after_work: function(d) {
          return "It's too late in the day, " + x(d.name, "en", " nominative".trim()) + " went offline. Try talking to them later.";
        }
      },
      task: {
        status: {
          not_started: function(d) {
            return "No one has started working on this task";
          },
          in_dev: {
            you: function(d) {
              return "Assigned to you!";
            },
            teammate: function(d) {
              return x(d.name, "en", " nominative".trim()) + " is currently working on this task";
            }
          },
          in_review: {
            yours: function(d) {
              return "You submitted this task to other team leads for review. This usually takes about 1 business day.";
            },
            teammate: function(d) {
              return x(d.name, "en", " genitive".trim()) + "'s task is completed and waiting for your review";
            }
          },
          in_testing: function(d) {
            return "This task was submitted for testing. If everything goes well, this process takes about 1 business day. But, if serious issues are found, the task can always be returned to the developer.";
          },
          done: function(d) {
            return "This task is in production now. Great job!";
          }
        },
        action: {
          go_to_editor: function(d) {
            return "Go to CodeJunkie editor";
          },
          go_to_review: function(d) {
            return "Review code";
          },
          assign_to_you: function(d) {
            return "Accept for development";
          }
        }
      },
      inbox: {
        review_info: function(d) {
          return "Once a developer completes a task, their code needs to be reviewed by their team lead (you)";
        },
        returned_to_dev: function(d) {
          return "It seems that the QA team has found serious bugs in this task and bounced it back to the developer";
        },
        production_bug: function(d) {
          return "Support ticket. Apparently, some serious bugs have been found in one of our tasks that were transferred to production. They need to be fixed within a limited time period (as agreed with clients). Bugs left: " + d.num_bugs;
        },
        production_bug_fixed: function(d) {
          return "It looks like all the problems reported in the ticket have been fixed and the clients have let you know that there aren't any more issues. You can relax";
        },
        action: {
          review: function(d) {
            return "Review code";
          },
          mark_as_read: function(d) {
            return "Mark as read";
          },
          fix_bugs: function(d) {
            return "Work on bugs (1 hr)";
          },
          do_something_else: function(d) {
            return "Do something else";
          }
        }
      },
      browser: {
        jabr: function(d) {
          return "DevTech Mag is a popular resource with tons of tech articles";
        },
        jabr_read: function(d) {
          return "After scrolling through a couple of tech articles and reading a dozen holy wars in the comments, you feel increasingly big-brained [+Performance]";
        },
        you_cube: function(d) {
          return "Want to see what's new on your favorite video website?";
        },
        you_cube_watched: function(d) {
          return "After watching " + d.video + ", you feel a lot more relaxed [-Burnout]";
        },
        video: {
          v1: function(d) {
            return "funny clips from The Office TV show";
          },
          v2: function(d) {
            return "a couple of cat videos";
          },
          v3: function(d) {
            return "an interview by Philip DeFranco";
          },
          v4: function(d) {
            return "a review by Marques Brownlee";
          },
          v5: function(d) {
            return "a let's play by Markiplier";
          },
          v6: function(d) {
            return "some WWE wrestling videos";
          },
          v7: function(d) {
            return "a video by PewDiePie";
          },
          v8: function(d) {
            return "an episode of The Mandolorian";
          },
          v9: function(d) {
            return "a new invention video by TechZone";
          }
        },
        action: {
          read_jabr: function(d) {
            return "Read DevTech Mag (1 hr)";
          },
          you_cube: function(d) {
            return "Watch YouCube (1 hr)";
          }
        }
      },
      computer: {
        finish_work_for_today: function(d) {
          return "Finish work (for today)";
        }
      },
      weekend: {
        day: {
          mon: function(d) {
            return "It's Monday";
          },
          tue: function(d) {
            return "It's Tuesday";
          },
          wed: function(d) {
            return "It's Wednesday";
          },
          thu: function(d) {
            return "It's Thursday";
          },
          fri: function(d) {
            return "It's Friday";
          },
          sat: function(d) {
            return "It's Saturday";
          },
          sun: function(d) {
            return "It's Sunday";
          }
        },
        message: function(d) {
          return d.day_started + ". It's the weekend, and you should enjoy your well-deserved days off. You can continue working, though, if you want.";
        },
        action: {
          rest: function(d) {
            return "Relax until Monday";
          },
          do_something_else: function(d) {
            return "Do something else";
          }
        }
      },
      game_over: {
        reason: {
          victory: function(d) {
            return "All tasks went to production and you've just noticed that the backlog is empty. You did it! You met the deadline!";
          },
          deadline_failed: function(d) {
            return "The deadline kept creeping closer, day after day, week after week. \n\nYou had a feeling this would happen, but you continued to work in some sort of zealous stupor, hoping that things would sort themselves out. But, they didn't. \n\nYou missed the deadline. The customer is lost. The end.";
          },
          fired: function(d) {
            return `Your computer unexpectedly locked itself. Cursing the PearNote developers for the millionth time, you entered your password to log back in. 

It didn't work. The laptop angrily beeps at you. You try again. No luck.

"Huh, must be broken," you think while taking out your phone to contact IT for help. You see a new email with the subject line "Fired for poor performance." What?!`;
          },
          bad_health: function(d) {
            return "Recently, you've been really absorbed in your work, even ignoring meals and sleep. You were so focuesed that you didn't even notice your skin becoming pale and the dark circles under your eyes.\n\nYour family members find you passed out at the computer. You're brought to the hospital, and you can forget about working for the next couple of weeks, not to mention the approaching deadline.";
          },
          burnout: function(d) {
            return "You've forgotten what it feels like to relax. Completing task after task, you didn't notice that all your free time turned into work time. Suddenly something clicked in your head. Why do you need this all? Why all this effort? Where am I going? \n\n“Screw it all! Screw the work, Screw the deadline, I don't care anymore!” you yell while buying a plane ticket back to your hometown. Burnout is no joke, you know.";
          }
        },
        tip: {
          bad_health: function(d) {
            return "Remember to get enough food and rest";
          },
          burnout: function(d) {
            return "Work less after hours, including weekends!";
          },
          fired: function(d) {
            return "Remember to attend important business meetings and track bugs in your inbox";
          }
        },
        message: {
          header: function(d) {
            return "Game over";
          },
          difficulty: function(d) {
            return "Difficulty: " + d.difficulty;
          },
          tip: function(d) {
            return "Hint: " + d.tip;
          }
        },
        action: {
          restart: function(d) {
            return "Restart the game";
          },
          learn_more: function(d) {
            return "Or learn about engineering teams at Wrike";
          }
        }
      }
    },
    top_bar: {
      day: {
        mon: function(d) {
          return "Monday";
        },
        tue: function(d) {
          return "Tuesday";
        },
        wed: function(d) {
          return "Wednesday";
        },
        thu: function(d) {
          return "Thursday";
        },
        fri: function(d) {
          return "Friday";
        },
        sat: function(d) {
          return "Saturday";
        },
        sun: function(d) {
          return "Sunday";
        }
      },
      today: function(d) {
        return "September " + plural(d.day, 0, en, {other: number("en", d.day, 0)}, 1) + ", " + d.day_of_week;
      },
      finish_work_tip: function(d) {
        return "You can finish your day's work here";
      }
    },
    assigned_to_you: function(d) {
      return "You";
    },
    difficulty: {
      junior: function(d) {
        return "Junior";
      },
      middle: function(d) {
        return "Mid-level";
      },
      senior: function(d) {
        return "Senior";
      },
      teamlead: function(d) {
        return "Team lead";
      }
    },
    deadline_stats: {
      days_until: function(d) {
        return "The deadline is in " + plural(d.days, 0, en, {one: number("en", d.days, 0) + " day", other: number("en", d.days, 0) + " days"});
      },
      tasks_remaining: function(d) {
        return plural(d.tasks, 0, en, {one: "", other: ""}) + " " + plural(d.tasks, 0, en, {other: number("en", d.tasks, 0)}) + " " + plural(d.tasks, 0, en, {one: "task left", other: "tasks left"}) + " (of " + d.total + ")";
      },
      backlog: function(d) {
        return plural(d.tasks, 0, en, {other: number("en", d.tasks, 0)}) + " " + plural(d.tasks, 0, en, {one: "task backlogged", other: "tasks backlogged"});
      }
    },
    status: {
      health: {
        perfect: function(d) {
          return "Perfect";
        },
        good: function(d) {
          return "Good";
        },
        fine: function(d) {
          return "Weak";
        },
        bad: function(d) {
          return "Poor";
        },
        terrible: function(d) {
          return "Sick";
        },
        zero: function(d) {
          return "Collapsing";
        }
      },
      company: {
        perfect: function(d) {
          return "Perfect";
        },
        good: function(d) {
          return "HR is starting to ask questions";
        },
        fine: function(d) {
          return "Conversations are underway with your manager";
        },
        bad: function(d) {
          return "A Personal Improvement Plan is being drawn up";
        },
        terrible: function(d) {
          return "Dismissal papers are being signed";
        },
        zero: function(d) {
          return "Fired";
        }
      },
      burnout: {
        perfect: function(d) {
          return "Perfect";
        },
        good: function(d) {
          return "Lightly annoyed at work";
        },
        fine: function(d) {
          return "Hard to get up in the morning";
        },
        bad: function(d) {
          return "Sick of working";
        },
        terrible: function(d) {
          return "Almost burned out";
        },
        zero: function(d) {
          return "Burned out";
        }
      },
      label: {
        health: function(d) {
          return "Physical health";
        },
        burnout: function(d) {
          return "Mental health";
        },
        company: function(d) {
          return "Status in the company";
        },
        performance: function(d) {
          return "Performance";
        }
      }
    },
    chat: {
      action: {
        message_teammate: function(d) {
          return "Respond to " + x(d.name, "en", " dative".trim());
        }
      },
      greetings: {
        v1: function(d) {
          return "Hi there";
        },
        v2: function(d) {
          return "Hey";
        },
        v3: function(d) {
          return "Hi";
        },
        v4: function(d) {
          return "Hello";
        },
        v5: function(d) {
          return "Hey! What's up?";
        }
      },
      thanks: {
        v1: function(d) {
          return "Thanks";
        },
        v2: function(d) {
          return "Thank you!";
        },
        v3: function(d) {
          return "Thanks so much!";
        }
      },
      figured_out: {
        v1: function(d) {
          return "Got it";
        },
        v2: function(d) {
          return "All right, I figured it out. Thanks";
        },
        v3: function(d) {
          return "Nvm, I figured it out myself";
        },
        v4: function(d) {
          return "Ah, I figured out the problem. Don't mind me!";
        },
        v5: function(d) {
          return "I figured it out by myself, I'll let you know if anything else comes up";
        }
      },
      help: {
        v1: function(d) {
          return "I'm having issues with " + d.task_name + ". Can you help?";
        },
        v2: function(d) {
          return "I'm having trouble figuring out " + d.task_name + " " + plural(d.sadness, 0, en, {one: "", "0": ":(", "1": ":((", other: ":((("}) + " \n\nCan you please help?";
        },
        v3: function(d) {
          return "Hey, I'm stuck on " + d.task_name + ". Help, please?";
        },
        v4: function(d) {
          return "Hey! " + d.task_name + " is too much for me, can you help?";
        },
        v5: function(d) {
          return "Can I call you to talk about " + d.task_name + "? I can't figure out one problem";
        }
      }
    },
    teammate: {
      name_nom_gen_dat: {
        v1: function(d) {
          return "Jack|Jack|Jack";
        },
        v2: function(d) {
          return "John|John|John";
        },
        v3: function(d) {
          return "Alex|Alex|Alex";
        },
        v4: function(d) {
          return "Paul|Paul|Paul";
        },
        v5: function(d) {
          return "Peter|Peter|Peter";
        }
      }
    },
    candidate: {
      first_names: function(d) {
        return "Christopher|Sophia|Jacob|Emma|Tom|George|Emily|James|Will|Noah|Liam|Abby|Ethan|Michael|Alex|Daniel|Joe|Elizabeth|Robert|Aria|Henry|Leo|Edward|Max|Sam|Chloe";
      },
      last_names: function(d) {
        return "Smith|Jones|Williams|Brown|Taylor|Foster|Wilson|Evans|Thomas|Roberts|Johnson|Miller|Davis|Murphy|Martin|Roy|Lee|White|Bell|Burton|Stevens|Lewis|Walker|Payne|Baker|Holmes|Owen";
      }
    },
    app: {
      browser: {
        name: function(d) {
          return "Iron Browser";
        }
      },
      chat: {
        name: function(d) {
          return "Sling Messenger";
        }
      },
      calendar: {
        name: function(d) {
          return "Calendar";
        }
      },
      editor: {
        name: function(d) {
          return "Code Junkie";
        }
      },
      wrike: {
        name: function(d) {
          return "Wrike";
        }
      },
      computer: {
        name: function(d) {
          return "PearNote";
        }
      }
    },
    website: {
      blog: function(d) {
        return "DevTech";
      },
      videos: function(d) {
        return "YouCube";
      }
    },
    feedback_note: function(d) {
      return "Got feedback or improvement ideas? Email us at techclub@team.wrike.com";
    }
  };

  // main/src/messages/ru.properties
  var x2 = (value, locale, arg) => {
    return value[arg];
  };
  var ru_default = {
    overlay: {
      intro: {
        header: function(d) {
          return "Вы — тимлид\nВаша команда:\n" + d.team;
        },
        difficulty: function(d) {
          return "Сложность: " + d.difficulty;
        },
        teammate: function(d) {
          return x2(d.name, "ru", " nominative".trim()) + " — специалист в " + d.skills;
        }
      },
      editor: {
        nothing_done: function(d) {
          return "В этой задаче совсем ничего не сделано. Время поработать?";
        },
        lots_of_work: function(d) {
          return "В текущей задаче еще полно работы";
        },
        mostly_done: function(d) {
          return "Кажется, в этой задаче большая часть работы готова";
        },
        almost_there: function(d) {
          return "В задачке осталось совсем немного работы";
        },
        done: function(d) {
          return "Основной код задачи готов!";
        },
        work_on_task: function(d) {
          return "Работать над текущей задачей (1 ч.)";
        },
        work_done_1: function(d) {
          return "Хрустнув пальцами, вы приступаете к работе. Спустя час непрерывного стука по клавиатуре вы наконец доходите до состояния, когда можно сделать коммит";
        },
        work_done_2: function(d) {
          return "Потянувшись в кресле, вы приступаете к работе. Спустя час злостного рефакторинга вы наконец доходите до состояния, когда можно сделать коммит";
        },
        work_done_3: function(d) {
          return "Сделав глоток кофе, вы приступаете к работе. Спустя час распиливания сервисов вы наконец доходите до состояния, когда можно сделать коммит";
        },
        work_done_4: function(d) {
          return "Глубоко вдохнув, вы приступаете к работе. Спустя час переписывания чужого кода вы наконец доходите до состояния, когда можно сделать коммит";
        },
        passed_to_review: function(d) {
          return "С чувством выполненного долга вы передаете задачу в ревью";
        },
        tests_done: function(d) {
          return "Поймав по пути пару багов, вы покрываете большую часть кода тестами. На душе становится чуть-чуть спокойнее";
        },
        qa_instructions_done: function(d) {
          return "Попытавшись успокоить совесть, вы подробно описываете сделанные в задаче изменения и моменты, которые нужно тщательно протестировать. Это точно должно упростить и ускорить процесс QA";
        },
        task_done: function(d) {
          return "С текущей задачкой покончено!";
        },
        action: {
          pass_to_review: function(d) {
            return "Передать задачу в ревью";
          },
          write_tests: function(d) {
            return "Написать тесты (1 ч.)";
          },
          write_qa_instructions: function(d) {
            return "Написать подробные инструкции для QA (1 ч.)";
          },
          open_wrike_to_take_new_task: function(d) {
            return "Открыть Wrike и взять следующую";
          },
          do_something_else: function(d) {
            return "Заняться чем-нибудь другим";
          }
        }
      },
      code_review: {
        look_at_code: {
          bad: function(d) {
            return "Вы открываете задачу " + x2(d.name, "ru", " genitive".trim()) + " в вечно тормозящем GitPub'e. Код выглядит откровенно плохо";
          },
          not_too_bad: function(d) {
            return "Вы открываете задачу " + x2(d.name, "ru", " genitive".trim()) + " в вечно тормозящем GitPub'e. Код смотрится довольно небрежным";
          },
          ok: function(d) {
            return "Вы открываете задачу " + x2(d.name, "ru", " genitive".trim()) + " в вечно тормозящем GitPub'e. На первый взгляд, код неплох";
          }
        },
        passed_to_qa_without_looking: function(d) {
          return "Недолго думая, вы ставите 'Review OK' и передаете задачу в QA. Своей команде вы все-таки доверяете";
        },
        found_bugs: function(d) {
          return "Тщательно прошерстив код, вы обнаруживаете в нем несколько багов и спорных моментов. Задача возвращается обратно к разработчику";
        },
        couldnt_find_bugs: function(d) {
          return "Долго щурясь и всматриваясь в код, вы все-же не находите к чему придраться. Задача отправляется в тестирование";
        },
        action: {
          pass_to_qa_without_looking: function(d) {
            return "Передать в тестирование не глядя";
          },
          look_at_code: function(d) {
            return "Тщательно просмотреть код (1 ч.)";
          },
          do_something_else: function(d) {
            return "Подумать еще";
          }
        }
      },
      standup: {
        you: {
          name: function(d) {
            return "Вы";
          },
          working_on: function(d) {
            return "Пока что работаю над " + d.task;
          },
          will_take_next_task: function(d) {
            return "Беру следующую задачу в работу";
          }
        },
        teammate: {
          worked_on: {
            v1: function(d) {
              return "Работал над";
            },
            v2: function(d) {
              return "Старался над";
            },
            v3: function(d) {
              return "Залипал в";
            },
            v4: function(d) {
              return "Трудился над";
            },
            v5: function(d) {
              return "Тупил над";
            },
            v6: function(d) {
              return "Врубался в";
            },
            v7: function(d) {
              return "Втыкал в";
            },
            base: function(d) {
              return d.worked_on + " " + d.task;
            },
            stuck: function(d) {
              return d.worked_on + " " + d.task + ", немного застрял, пытаюсь разобраться";
            },
            finishing_soon: function(d) {
              return d.worked_on + " " + d.task + ", надеюсь, сегодня закончу";
            }
          },
          finished_all_tasks: {
            v1: function(d) {
              return "Закончил все свои задачи, жду следующей";
            },
            v2: function(d) {
              return "Задачки кончились, что взять следующим?";
            },
            v3: function(d) {
              return "Предыдущие задачки уехали, готов взять еще";
            },
            v4: function(d) {
              return "Прошлая задачка готова, какую брать дальше?";
            },
            v5: function(d) {
              return "Доделал всё, над чем работал, буду брать новую задачку";
            }
          }
        },
        action: {
          continue: function(d) {
            return "Продолжить";
          },
          suggest_task: function(d) {
            return "Предложить взять " + d.task + ", оценка: " + d.estimated_time;
          },
          continue_no_free_tasks: function(d) {
            return "Нет свободных задач, продолжить";
          },
          assign_to_yourself: function(d) {
            return "Взять на себя " + d.task + ", оценка: " + d.estimated_time;
          }
        },
        finished: function(d) {
          return "Стендап закончен, рабочий день начался!";
        }
      },
      calendar: {
        lunch: {
          message: function(d) {
            return "Сегодня в местной столовой, как всегда, людно. Отстояв в очереди, вы покупаете " + d.food + " и с удовольствием обедаете [+Здоровье]";
          },
          food: {
            v1: function(d) {
              return "макарошки с курицей";
            },
            v2: function(d) {
              return "пюрешку с гуляшем";
            },
            v3: function(d) {
              return "супчик";
            },
            v4: function(d) {
              return "котлетки";
            },
            v5: function(d) {
              return "салатик";
            },
            v6: function(d) {
              return "рыбку";
            },
            v7: function(d) {
              return "кусочек пиццы";
            }
          }
        },
        standup: {
          info: function(d) {
            return "На ежедневном стендапе все члены команды делятся краткой информацией о проделанной за предыдущий день работе и текущих блокерах";
          }
        },
        one_on_one: {
          info: function(d) {
            return "На еженедельных One on One встречах члены команды встречаются с их прямым менеджером и обсуждают рабочие и личные вопросы в свободной форме. Это помогает увеличить доверие между членами команды и выявить потенциальные проблемы заранее";
          },
          message: function(d) {
            return "One on One прошел продуктивно. " + x2(d.name, "ru", " nominative".trim()) + " поделился своими переживаниями по поводу дедлайна и успехами в работе. Вы поделились кусочком тимлидской мудрости, и " + x2(d.name, "ru", " nominative".trim()) + " явно остался доволен [+Навык]";
          }
        },
        knowledge_sharing: {
          info: function(d) {
            return "Knowledge Sharing — еженедельное событие, на котором один из разработчиков освещает потенциально полезную коллегам тему. Тема сегодняшней встречи — " + d.topic;
          },
          message: function(d) {
            return "Sharing сегодня был максимально интересный. Вы буквально прозрели на тему " + d.topic + " и чувствуете, будто теперь можете вообще всё [+Производительность]";
          }
        },
        interview: {
          info: function(d) {
            return "Одна из Ваших обязанностей — участвовать в собеседованиях потенциальных кандидатов, в том числе в другие команды";
          },
          message: function(d) {
            return "Собеседование, как всегда, было довольно выматывающим. Но сегодняшний кандидат, " + d.candidate_name + ", довольно интересный";
          }
        },
        lead_meeting: {
          info: function(d) {
            return "Еженедельный синк тимлидов служит чем-то вроде форума для быстрой коммуникации среди команд. На нем всегда можно узнать свежие новости о работе других коллег или задать вопрос о пересекающейся функциональности";
          },
          message: function(d) {
            return "На сегодняшнем синке не было ничего особо интересного";
          }
        },
        already_started: function(d) {
          return "Эта встреча уже началась, вы опоздали!";
        },
        already_finished: function(d) {
          return "Это событие уже закончилось";
        },
        not_started_yet: function(d) {
          return "Это событие еще не началось, к нему можно будет присоединиться позже!";
        },
        action: {
          lunch: function(d) {
            return "Идти на обед (1 ч.)";
          },
          standup: function(d) {
            return "Подключиться к стендапу (1 ч.)";
          },
          one_on_one: function(d) {
            return "Подключиться к встрече (1 ч.)";
          },
          knowledge_sharing: function(d) {
            return "Присоединиться и послушать (1 ч.)";
          },
          interview: function(d) {
            return "Подключиться к звонку (2 ч.)";
          },
          lead_meeting: function(d) {
            return "Подключиться к встрече (1 ч.)";
          },
          do_something_else: function(d) {
            return "Подумать еще";
          }
        }
      },
      teammate: {
        action: {
          help: function(d) {
            return "Помочь " + x2(d.name, "ru", " dative".trim()) + " с задачей (1 ч.)";
          }
        },
        helped: function(d) {
          return "Свежим взглядом пробежавшись по задаче " + x2(d.name, "ru", " genitive".trim()) + ", вы довольно быстро обнаруживаете проблему и мудрым советом помогаете ему продолжить работу [+Навык]";
        },
        nothing_to_talk_about: function(d) {
          return "Не приходит в голову, о чем сейчас можно было бы поговорить";
        },
        cant_talk_after_work: function(d) {
          return "Время уже не рабочее, и " + x2(d.name, "ru", " nominative".trim()) + " ушел в оффлайн, лучше написать ему позже";
        }
      },
      task: {
        status: {
          not_started: function(d) {
            return "Над этой задачей еще никто не начинал работу";
          },
          in_dev: {
            you: function(d) {
              return "Сейчас назначена на вас!";
            },
            teammate: function(d) {
              return "Над этой задачей сейчас работает " + x2(d.name, "ru", " nominative".trim());
            }
          },
          in_review: {
            yours: function(d) {
              return "Вы передали эту задачу в ревью другим тимлидам. Обычно это занимает порядка одного рабочего дня";
            },
            teammate: function(d) {
              return "Задача " + x2(d.name, "ru", " genitive".trim()) + " готова и ждет от вас ревью";
            }
          },
          in_testing: function(d) {
            return "Эта задача передана в тестирование. Если все идет нормально, процесс занимает порядка одного рабочего дня, но при обнаружении серьезных дефектов задача всегда может быть возвращена разработчику";
          },
          done: function(d) {
            return "Эта задача уже на проде. Мы такие молодцы!";
          }
        },
        action: {
          go_to_editor: function(d) {
            return "Перейти в редактор CodeJunkie";
          },
          go_to_review: function(d) {
            return "Сделать ревью";
          },
          assign_to_you: function(d) {
            return "Взять в разработку";
          }
        }
      },
      inbox: {
        review_info: function(d) {
          return "После выполнения задачи разработчиком необходимо провести ревью кода. Обычно эта задача ложится на тимлида (т.е. вас)";
        },
        returned_to_dev: function(d) {
          return "Судя по всему, команда QA обнаружила в этой задаче серьезные баги и вернула ее обратно разработчику";
        },
        production_bug: function(d) {
          return "Тикет от саппорта. В одной из наших задач, которая уже уехала на прод, обнаружились серьезные баги. Их нужно исправить за отведенное время (по нашей договоренности с клиентами). Багов осталось: " + d.num_bugs;
        },
        production_bug_fixed: function(d) {
          return "Похоже, что все проблемы в тикете исправлены, клиенты подтвердили отсутствие дефектов, можно расслабиться";
        },
        action: {
          review: function(d) {
            return "Сделать ревью";
          },
          mark_as_read: function(d) {
            return "Пометить прочитанным";
          },
          fix_bugs: function(d) {
            return "Работать над багами (1 ч.)";
          },
          do_something_else: function(d) {
            return "Подумать еще";
          }
        }
      },
      browser: {
        jabr: function(d) {
          return "Жабр — один из самых известных ресурсов с постоянно пополняющимся архивом технических статей";
        },
        jabr_read: function(d) {
          return "Пролистав пару технических статей и с десяток холиваров в комментариях, вы буквально чувствуете, как растет ваш мозг [+Производительность]";
        },
        you_cube: function(d) {
          return "Интересно, что нового на вашем любимом сайте с видосиками?";
        },
        you_cube_watched: function(d) {
          return "Посмотрев " + d.video + ", вы чувствуете себя совершенно свободным от мирских забот [-Выгорание]";
        },
        video: {
          v1: function(d) {
            return "смешные моменты из Офиса";
          },
          v2: function(d) {
            return "пару видосов Лапенко";
          },
          v3: function(d) {
            return "интервью Дудя";
          },
          v4: function(d) {
            return "обзор Вилсакома";
          },
          v5: function(d) {
            return "летсплей Куплинова";
          },
          v6: function(d) {
            return "серию Зашкварных Историй";
          },
          v7: function(d) {
            return "видосик Сыендука";
          },
          v8: function(d) {
            return "эпизод TiX";
          },
          v9: function(d) {
            return "видео об очередном изобретении KREOSAN'а";
          }
        },
        action: {
          read_jabr: function(d) {
            return "Читать Жабр (1 ч.)";
          },
          you_cube: function(d) {
            return "Смотреть Юкуб (1 ч.)";
          }
        }
      },
      computer: {
        finish_work_for_today: function(d) {
          return "Завершить работу на сегодня";
        }
      },
      weekend: {
        day: {
          mon: function(d) {
            return "Наступил понедельник";
          },
          tue: function(d) {
            return "Наступил вторник";
          },
          wed: function(d) {
            return "Наступила среда";
          },
          thu: function(d) {
            return "Наступил четверг";
          },
          fri: function(d) {
            return "Наступила пятница";
          },
          sat: function(d) {
            return "Наступила суббота";
          },
          sun: function(d) {
            return "Наступило воскресенье";
          }
        },
        message: function(d) {
          return d.day_started + ". Сегодня у вас заслуженный выходной. Вы можете продолжить работать, но достоверно известно, что в выходные нужно отдыхать";
        },
        action: {
          rest: function(d) {
            return "Отдыхать до понедельника";
          },
          do_something_else: function(d) {
            return "Заняться чем-то еще";
          }
        }
      },
      game_over: {
        reason: {
          victory: function(d) {
            return "Задачка за задачкой уходят в прод, и вы едва успеваете заметить, как закончился беклог. Вы сделали это! Дедлайн побежден!";
          },
          deadline_failed: function(d) {
            return "День за днем, неделя за неделей дедлайн подбирался всё ближе. Вы уже давно чувствовали, что это случится, но в каком-то рьяном ступоре продолжали работать, возможно надеясь, что оно как-то само собой рассосется. Не рассосалось. Дедлайн провален. Клиент потерян. Крышка.";
          },
          fired: function(d) {
            return "Ваш компьютер неожиданно блокируется. В сотый раз проклиная производителей PearNote, вы пытаетесь вернуться к работе, введя пароль. Ноутбук все продолжает отрицать легитимность его хозяина, издавая противный звук при каждой неудачной попытке входа. «Видимо, ему совсем кранты», — думаете вы, доставая телефон, чтобы написать инженерам хелпдеска. На почту падает новое письмо. «Уволен одним днем за неисполнение служебных обязанностей». Что?!";
          },
          bad_health: function(d) {
            return "В последние дни вы совсем погрузились в работу, игнорируя приемы пищи и сон. За всем этим вы и не заметили, как кожа приобрела бледный оттенок, а под глазами появились синие мешки. Ваши родственники находят вас в состоянии обморока прямо у компьютера. Вы отправляетесь в больницу, о работе можно забыть на следующие пару недель, не говоря уже о приближающемся дедлайне.";
          },
          burnout: function(d) {
            return "Вы уже и забыли, что такое отдых. Закрывая задачу за задачей, вы не замечаете, как все свободное время превращается в рабочее. В какой-то момент внутри вас что-то щелкает. Зачем вам вообще это нужно? К чему все эти старания? Куда я двигаюсь? «А пропади оно все пропадом! К черту работу, к черту дедлайн, мне уже все равно!», — думаете вы и покупаете авиабилет в Саратов к родителям. Выгорание — это вам не шутки.";
          }
        },
        tip: {
          bad_health: function(d) {
            return "Не забывайте есть и достаточно спать";
          },
          burnout: function(d) {
            return "Меньше работайте в нерабочее время, в том числе в выходные!";
          },
          fired: function(d) {
            return "Следите за посещением обязательным рабочих встреч и багами на продакшне (в вашем инбоксе)";
          }
        },
        message: {
          header: function(d) {
            return "Игра окончена";
          },
          difficulty: function(d) {
            return "Сложность: " + d.difficulty;
          },
          tip: function(d) {
            return "Подсказка: " + d.tip;
          }
        },
        action: {
          restart: function(d) {
            return "Начните заново";
          },
          learn_more: function(d) {
            return "Или узнайте, как работают инжиниринговые команды в Wrike";
          }
        }
      }
    },
    top_bar: {
      day: {
        mon: function(d) {
          return "Понедельник";
        },
        tue: function(d) {
          return "Вторник";
        },
        wed: function(d) {
          return "Среда";
        },
        thu: function(d) {
          return "Четверг";
        },
        fri: function(d) {
          return "Пятница";
        },
        sat: function(d) {
          return "Суббота";
        },
        sun: function(d) {
          return "Воскресенье";
        }
      },
      today: function(d) {
        return "Сентябрь " + plural(d.day, 0, ru, {other: number("ru", d.day, 0)}, 1) + ", " + d.day_of_week;
      },
      finish_work_tip: function(d) {
        return "Завершить работу на сегодня можно здесь";
      }
    },
    assigned_to_you: function(d) {
      return "Вы";
    },
    difficulty: {
      junior: function(d) {
        return "Джуниор";
      },
      middle: function(d) {
        return "Мидл";
      },
      senior: function(d) {
        return "Сеньор";
      },
      teamlead: function(d) {
        return "Тимлид";
      }
    },
    deadline_stats: {
      days_until: function(d) {
        return "До дедлайна " + plural(d.days, 0, ru, {one: number("ru", d.days, 0) + " день", few: number("ru", d.days, 0) + " дня", many: number("ru", d.days, 0) + " дней", other: number("ru", d.days, 0) + " дня"});
      },
      tasks_remaining: function(d) {
        return plural(d.tasks, 0, ru, {one: "Осталось", few: "Остались", many: "Осталось", other: "Осталось"}) + " " + plural(d.tasks, 0, ru, {other: number("ru", d.tasks, 0)}) + " " + plural(d.tasks, 0, ru, {one: "задача", few: "задачи", many: "задач", other: "задачи"}) + " (из " + d.total + ")";
      },
      backlog: function(d) {
        return "В беклоге " + plural(d.tasks, 0, ru, {other: number("ru", d.tasks, 0)}) + " " + plural(d.tasks, 0, ru, {one: "задача", few: "задачи", many: "задач", other: "задачи"});
      }
    },
    status: {
      health: {
        perfect: function(d) {
          return "Отличное";
        },
        good: function(d) {
          return "Хорошее";
        },
        fine: function(d) {
          return "Неважное";
        },
        bad: function(d) {
          return "Плохое";
        },
        terrible: function(d) {
          return "Отвратительное";
        },
        zero: function(d) {
          return "Обморок";
        }
      },
      company: {
        perfect: function(d) {
          return "Отличное";
        },
        good: function(d) {
          return "HR'ы начинают что-то подозревать";
        },
        fine: function(d) {
          return "С вашим менеджером ведутся разговоры";
        },
        bad: function(d) {
          return "Оформляется Personal Improvement Plan";
        },
        terrible: function(d) {
          return "Подписываются бумаги об увольнении";
        },
        zero: function(d) {
          return "Уволен";
        }
      },
      burnout: {
        perfect: function(d) {
          return "Отличное";
        },
        good: function(d) {
          return "Легкое раздражение от работы";
        },
        fine: function(d) {
          return "Не хочется вставать по утрам";
        },
        bad: function(d) {
          return "Работа вызывает отвращение";
        },
        terrible: function(d) {
          return "Близко к выгоранию";
        },
        zero: function(d) {
          return "Выгорел";
        }
      },
      label: {
        health: function(d) {
          return "Физическое здоровье";
        },
        burnout: function(d) {
          return "Ментальное здоровье";
        },
        company: function(d) {
          return "Положение в компании";
        },
        performance: function(d) {
          return "Производительность";
        }
      }
    },
    chat: {
      action: {
        message_teammate: function(d) {
          return "Написать " + x2(d.name, "ru", " dative".trim());
        }
      },
      greetings: {
        v1: function(d) {
          return "Привет";
        },
        v2: function(d) {
          return "Прив";
        },
        v3: function(d) {
          return "Хай";
        },
        v4: function(d) {
          return "Даров";
        },
        v5: function(d) {
          return "Здоровеньки булы";
        }
      },
      thanks: {
        v1: function(d) {
          return "Спасибо";
        },
        v2: function(d) {
          return "Спасибо!";
        },
        v3: function(d) {
          return "Спасибо!!";
        }
      },
      figured_out: {
        v1: function(d) {
          return "Разобрался";
        },
        v2: function(d) {
          return "Всё, сам догнал, сорян";
        },
        v3: function(d) {
          return "Ух, все, допер сам";
        },
        v4: function(d) {
          return "Ага, понял сам в чем проблема, не отвлекаю";
        },
        v5: function(d) {
          return "Осилил сам вроде, если что ещё напишу";
        }
      },
      help: {
        v1: function(d) {
          return "Я что-то залип с " + d.task_name + ", поможешь?";
        },
        v2: function(d) {
          return "Не могу разобраться с " + d.task_name + " " + plural(d.sadness, 0, ru, {"0": "(", "1": "((", other: "((("}) + ". Можешь помочь?";
        },
        v3: function(d) {
          return "Что-то я совсем застрял на " + d.task_name + ". Подсобишь?";
        },
        v4: function(d) {
          return d.task_name + " оказалась мне не по силам, поможешь?";
        },
        v5: function(d) {
          return "Можем созвониться по " + d.task_name + "? Не могу разобрать одну проблему.";
        }
      }
    },
    teammate: {
      name_nom_gen_dat: {
        v1: function(d) {
          return "Иван|Ивана|Ивану";
        },
        v2: function(d) {
          return "Вася|Васи|Васе";
        },
        v3: function(d) {
          return "Дима|Димы|Диме";
        },
        v4: function(d) {
          return "Коля|Коли|Коле";
        },
        v5: function(d) {
          return "Вадик|Вадика|Вадику";
        }
      }
    },
    candidate: {
      first_names: function(d) {
        return "Авдей|Авксентий|Агафон|Акакий|Александр|Владлен|Влас|Всеволод|Вячеслав|Макар|Максим|Марк|Матвей|Тарас|Тимофей|Тимур|Святослав|Севастьян|Семён|Серафим|Сергей|Павел|Паисий|Панкратий|Пантелеймон|Парфений";
      },
      last_names: function(d) {
        return "Сафонов|Капустин|Кириллов|Моисеев|Елисеев|Кошелев|Костин|Горбачёв|Орехов|Ефремов|Исаев|Евдокимов|Калашников|Кабанов|Носков|Юдин|Кулагин|Лапин|Прохоров|Нестеров|Харитонов|Агафонов|Муравьёв|Ларионов|Федосеев|Зимин|Пахомов";
      }
    },
    app: {
      browser: {
        name: function(d) {
          return "Iron Browser";
        }
      },
      chat: {
        name: function(d) {
          return "Limp Messenger";
        }
      },
      calendar: {
        name: function(d) {
          return "Clndr";
        }
      },
      editor: {
        name: function(d) {
          return "Code Junkie";
        }
      },
      wrike: {
        name: function(d) {
          return "Wrike";
        }
      },
      computer: {
        name: function(d) {
          return "PearNote";
        }
      }
    },
    website: {
      blog: function(d) {
        return "Jabr";
      },
      videos: function(d) {
        return "YouCube";
      }
    },
    feedback_note: function(d) {
      return "Есть фидбек или идеи для улучшения? Пишите на techclub@team.wrike.com";
    }
  };

  // main/src/main.ts
  var i18n = en_default;
  var Button_State;
  (function(Button_State2) {
    Button_State2[Button_State2["default"] = 0] = "default";
    Button_State2[Button_State2["hovered"] = 1] = "hovered";
    Button_State2[Button_State2["clicked"] = 2] = "clicked";
  })(Button_State || (Button_State = {}));
  var Layout_Type;
  (function(Layout_Type2) {
    Layout_Type2[Layout_Type2["vertical"] = 0] = "vertical";
    Layout_Type2[Layout_Type2["horizontal"] = 1] = "horizontal";
    Layout_Type2[Layout_Type2["absolute"] = 2] = "absolute";
  })(Layout_Type || (Layout_Type = {}));
  var Task_Status;
  (function(Task_Status2) {
    Task_Status2[Task_Status2["new"] = 0] = "new";
    Task_Status2[Task_Status2["in_development"] = 1] = "in_development";
    Task_Status2[Task_Status2["in_review"] = 2] = "in_review";
    Task_Status2[Task_Status2["in_testing"] = 3] = "in_testing";
    Task_Status2[Task_Status2["done"] = 4] = "done";
  })(Task_Status || (Task_Status = {}));
  var Calendar_Event_Type;
  (function(Calendar_Event_Type2) {
    Calendar_Event_Type2[Calendar_Event_Type2["one_on_one"] = 0] = "one_on_one";
    Calendar_Event_Type2[Calendar_Event_Type2["lead_meeting"] = 1] = "lead_meeting";
    Calendar_Event_Type2[Calendar_Event_Type2["candidate_interview"] = 2] = "candidate_interview";
    Calendar_Event_Type2[Calendar_Event_Type2["daily_standup"] = 3] = "daily_standup";
    Calendar_Event_Type2[Calendar_Event_Type2["knowledge_sharing"] = 4] = "knowledge_sharing";
    Calendar_Event_Type2[Calendar_Event_Type2["lunch"] = 5] = "lunch";
  })(Calendar_Event_Type || (Calendar_Event_Type = {}));
  var App_Type;
  (function(App_Type2) {
    App_Type2[App_Type2["code_junkie"] = 0] = "code_junkie";
    App_Type2[App_Type2["limp"] = 1] = "limp";
    App_Type2[App_Type2["wrike"] = 2] = "wrike";
    App_Type2[App_Type2["clndr"] = 3] = "clndr";
    App_Type2[App_Type2["iron"] = 4] = "iron";
  })(App_Type || (App_Type = {}));
  var Overlay_Type;
  (function(Overlay_Type2) {
    Overlay_Type2[Overlay_Type2["none"] = 0] = "none";
    Overlay_Type2[Overlay_Type2["lang"] = 1] = "lang";
    Overlay_Type2[Overlay_Type2["intro"] = 2] = "intro";
    Overlay_Type2[Overlay_Type2["standup_report"] = 3] = "standup_report";
    Overlay_Type2[Overlay_Type2["code_review"] = 4] = "code_review";
    Overlay_Type2[Overlay_Type2["weekend"] = 5] = "weekend";
    Overlay_Type2[Overlay_Type2["calendar_event_menu"] = 6] = "calendar_event_menu";
    Overlay_Type2[Overlay_Type2["message"] = 7] = "message";
    Overlay_Type2[Overlay_Type2["editor_work_menu"] = 8] = "editor_work_menu";
    Overlay_Type2[Overlay_Type2["computer_menu"] = 9] = "computer_menu";
    Overlay_Type2[Overlay_Type2["task_menu"] = 10] = "task_menu";
    Overlay_Type2[Overlay_Type2["teammate_menu"] = 11] = "teammate_menu";
    Overlay_Type2[Overlay_Type2["website_menu"] = 12] = "website_menu";
    Overlay_Type2[Overlay_Type2["inbox_entry_menu"] = 13] = "inbox_entry_menu";
    Overlay_Type2[Overlay_Type2["game_over"] = 14] = "game_over";
  })(Overlay_Type || (Overlay_Type = {}));
  var Skill;
  (function(Skill2) {
    Skill2[Skill2["dart"] = 0] = "dart";
    Skill2[Skill2["typescript"] = 1] = "typescript";
    Skill2[Skill2["javascript"] = 2] = "javascript";
    Skill2[Skill2["java"] = 3] = "java";
    Skill2[Skill2["sql"] = 4] = "sql";
    Skill2[Skill2["css"] = 5] = "css";
  })(Skill || (Skill = {}));
  var Website;
  (function(Website2) {
    Website2[Website2["jabr"] = 0] = "jabr";
    Website2[Website2["you_cube"] = 1] = "you_cube";
  })(Website || (Website = {}));
  var Difficulty;
  (function(Difficulty2) {
    Difficulty2[Difficulty2["junior"] = 0] = "junior";
    Difficulty2[Difficulty2["middle"] = 1] = "middle";
    Difficulty2[Difficulty2["senior"] = 2] = "senior";
    Difficulty2[Difficulty2["teamlead"] = 3] = "teamlead";
  })(Difficulty || (Difficulty = {}));
  var Inbox_Entry_Type;
  (function(Inbox_Entry_Type2) {
    Inbox_Entry_Type2[Inbox_Entry_Type2["review_task"] = 0] = "review_task";
    Inbox_Entry_Type2[Inbox_Entry_Type2["task_returned_to_dev"] = 1] = "task_returned_to_dev";
    Inbox_Entry_Type2[Inbox_Entry_Type2["production_bug"] = 2] = "production_bug";
  })(Inbox_Entry_Type || (Inbox_Entry_Type = {}));
  var Game_Over_Reason;
  (function(Game_Over_Reason2) {
    Game_Over_Reason2[Game_Over_Reason2["victory"] = 0] = "victory";
    Game_Over_Reason2[Game_Over_Reason2["deadline_failed"] = 1] = "deadline_failed";
    Game_Over_Reason2[Game_Over_Reason2["fired"] = 2] = "fired";
    Game_Over_Reason2[Game_Over_Reason2["bad_health"] = 3] = "bad_health";
    Game_Over_Reason2[Game_Over_Reason2["burnout"] = 4] = "burnout";
  })(Game_Over_Reason || (Game_Over_Reason = {}));
  function all_skills() {
    return [
      0,
      3,
      2,
      4,
      1
    ];
  }
  function skill_name(skill) {
    switch (skill) {
      case 0:
        return "Dart";
      case 1:
        return "TS";
      case 2:
        return "JS";
      case 3:
        return "Java";
      case 4:
        return "SQL";
      case 5:
        return "CSS";
    }
  }
  var game;
  var work_days = 5;
  var week_days = 7;
  var work_start_hour = 10;
  var work_end_hour = 18;
  var dev_mode = false;
  var debug_clip = false;
  var debug_buttons = false;
  var update_after_event_for_ms = 1e3;
  var image_cache = new Map();
  function embed_base64(from_path) {
    return from_path;
  }
  function xy(x3, y) {
    return {x: x3, y};
  }
  function clamp(x3, min, max) {
    return Math.min(max, Math.max(min, x3));
  }
  function image_from_url(url) {
    const resource = image_cache.get(url);
    if (resource) {
      return resource;
    }
    const new_resource = {
      img: new Image(),
      loaded: false
    };
    new_resource.img.onload = () => new_resource.loaded = true;
    new_resource.img.src = url;
    image_cache.set(url, new_resource);
    return new_resource;
  }
  function contains(x3, y, sx, sy, width, height) {
    return x3 >= sx && y >= sy && x3 < sx + width && y < sy + height;
  }
  function point_to_screen_space(x3, y) {
    const p = point_to_world_space(x3, y);
    return xy(p.x / game.dpi_scale, p.y / game.dpi_scale);
  }
  function point_to_world_space(x3, y) {
    const p = current_context().getTransform().transformPoint({x: x3, y});
    return xy(p.x, p.y);
  }
  function mouse_can_interact_with_area(mouse, top_left_x, top_left_y, width, height) {
    const clip = current_clip();
    if (debug_buttons) {
      const cursor2 = point_to_screen_space(0, 0);
      push_context(game.overlay_ctx);
      const ctx = current_context();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 1;
      ctx.strokeRect(cursor2.x + top_left_x, cursor2.y + top_left_y, width, height);
      pop_context();
    }
    if (clip) {
      const check_x = mouse.x;
      const check_y = mouse.y;
      let is_in_clip;
      if (clip.fixed) {
        const ctx = current_context();
        const old = ctx.getTransform();
        ctx.resetTransform();
        ctx.translate(clip.fix_point.x, clip.fix_point.y);
        is_in_clip = current_context().isPointInPath(clip.path, check_x, check_y);
        ctx.setTransform(old);
      } else {
        is_in_clip = true;
      }
      if (!is_in_clip)
        return false;
    }
    const cursor = point_to_screen_space(0, 0);
    return contains(mouse.x, mouse.y, cursor.x + top_left_x, cursor.y + top_left_y, width, height);
  }
  function button_behavior(top_left_x, top_left_y, width, height) {
    const hovered = mouse_can_interact_with_area(game.mouse, top_left_x, top_left_y, width, height);
    if (hovered && !game.any_button_hovered_this_frame) {
      game.any_button_hovered_this_frame = true;
      if (!game.any_button_clicked_this_frame && was_button_clicked(0)) {
        game.any_button_clicked_this_frame = true;
        return 2;
      } else {
        return 1;
      }
    }
    return 0;
  }
  function do_button(text, top_left_x, top_left_y, font_size_px, padding) {
    const ctx = current_context();
    ctx.font = `${font_size_px}px Open Sans`;
    const text_width = ctx.measureText(text).width;
    const button_width = padding + text_width + padding;
    const button_height = padding + font_size_px + padding;
    const state = button_behavior(top_left_x, top_left_y, button_width, button_height);
    ctx.fillStyle = state == 1 ? "#a4c7c2" : "#d0d0d0";
    ctx.fillRect(top_left_x, top_left_y, button_width, button_height);
    ctx.fillStyle = "black";
    ctx.fillText(text, top_left_x + padding, top_left_y + padding + font_size_px / 2);
    return state;
  }
  function label(text) {
    const ctx = current_context();
    const font = game.font_stack[game.font_stack.length - 1];
    const xy2 = layout_cursor();
    ctx.fillText(text, xy2.x, xy2.y + font.size / 2);
    push_size(font.size + 4);
  }
  function text_to_lines(text, wrap_at) {
    const paragraphs = text.split("\n");
    const lines = [];
    for (const paragraph of paragraphs) {
      const words2 = paragraph.split(" ");
      let line = words2[0];
      const ctx = current_context();
      for (let index = 1; index < words2.length; index++) {
        const word = words2[index];
        const width = ctx.measureText(line + " " + word).width;
        if (width < wrap_at) {
          line += " " + word;
        } else {
          lines.push(line);
          line = word;
        }
      }
      lines.push(line);
    }
    return lines;
  }
  function button(text) {
    const padding = 8;
    const font_size_px = 18;
    const xy2 = layout_cursor();
    const state = do_button(text, xy2.x, xy2.y, font_size_px, padding) == 2;
    push_size(padding + font_size_px + padding);
    push_size(4);
    return state;
  }
  function was_button_clicked(button2) {
    return game.mouse.button == button2 && game.mouse.clicked;
  }
  function layout_cursor() {
    return game.layout_stack[game.layout_stack.length - 1].cursor;
  }
  function set_layout_cursor(x3, y) {
    const cursor = layout_cursor();
    cursor.x = x3;
    cursor.y = y;
  }
  function push_layout(type) {
    const current = game.layout_stack[game.layout_stack.length - 1];
    game.layout_stack.push({
      type,
      cursor: xy(current.cursor.x, current.cursor.y)
    });
  }
  function pop_layout() {
    game.layout_stack.pop();
  }
  function update_font() {
    const font = game.font_stack[game.font_stack.length - 1];
    current_context().font = `${font.weight} ${font.size}px ${font.mono ? "monospace" : "sans-serif"}`;
  }
  function push_font(size, weight = "normal", mono = false) {
    game.font_stack.push({size, weight, mono});
    update_font();
  }
  function pop_font() {
    game.font_stack.pop();
    update_font();
  }
  function push_context(ctx) {
    game.context_stack.push(ctx);
  }
  function pop_context() {
    game.context_stack.pop();
  }
  function current_context() {
    return game.context_stack[game.context_stack.length - 1];
  }
  function push_clip(path, fixed = false) {
    const ctx = current_context();
    ctx.save();
    if (debug_clip) {
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke(path);
    }
    ctx.clip(path);
    const stack = game.clip_stack.get(ctx);
    const clip_space = fixed ? {fixed, path, fix_point: point_to_screen_space(0, 0)} : {fixed, path};
    if (!stack) {
      game.clip_stack.set(ctx, [clip_space]);
    } else {
      stack.push(clip_space);
    }
  }
  function pop_clip() {
    const ctx = current_context();
    const stack = game.clip_stack.get(ctx);
    if (stack) {
      stack.pop();
    }
    ctx.restore();
  }
  function current_clip() {
    const ctx = current_context();
    const stack = game.clip_stack.get(ctx);
    if (stack && stack.length > 0) {
      return stack[stack.length - 1];
    }
  }
  function push_size(size) {
    function increment_size(layout) {
      switch (layout.type) {
        case 1: {
          layout.cursor.x += size;
          break;
        }
        case 0: {
          layout.cursor.y += size;
          break;
        }
        case 2:
          break;
        default:
          unreachable(layout.type);
      }
    }
    for (let index = game.layout_stack.length - 1; index >= 0; index--) {
      const top = game.layout_stack[game.layout_stack.length - 1];
      const current = game.layout_stack[index];
      if (top.type == current.type) {
        increment_size(current);
      }
    }
  }
  function show_overlay(overlay) {
    if (game.overlay.type == 14) {
      return;
    }
    if (overlay.type == 14) {
      close_current_app();
    }
    game.overlay = overlay;
    game.overlay_shown_at = game.time;
  }
  function receive_message_from(teammate, text, skip_greeting = false) {
    const any_messages_today = teammate.messages.some((message) => message.received_at_day == game.day);
    if (!any_messages_today && !skip_greeting) {
      const greetings = [
        i18n.chat.greetings.v1(),
        i18n.chat.greetings.v2(),
        i18n.chat.greetings.v3(),
        i18n.chat.greetings.v4(),
        i18n.chat.greetings.v5()
      ];
      teammate.messages.push({
        received_at_day: game.day,
        received_at_hour: game.hour_of_day,
        text: random_in_array(greetings) + random_in_array(["", "!"]),
        received_at_day_of_week: game.day_of_week
      });
    }
    teammate.messages.push({
      received_at_day: game.day,
      received_at_hour: game.hour_of_day,
      received_at_day_of_week: game.day_of_week,
      text
    });
  }
  var images = {
    logo_pear: image_from_url(embed_base64("images/pear.png")),
    icon_app_code_junkie: image_from_url(embed_base64("images/code_junkie.png")),
    icon_app_limp: image_from_url(embed_base64("images/limp.png")),
    icon_app_wrike: image_from_url(embed_base64("images/wrike.png")),
    icon_app_clndr: image_from_url(embed_base64("images/clndr.png")),
    icon_app_iron: image_from_url(embed_base64("images/iron.png")),
    icon_web_you_cube: image_from_url(embed_base64("images/you_cube.png")),
    icon_web_jabr: image_from_url(embed_base64("images/jabr.png")),
    background_day: image_from_url(embed_base64("images/mojave-day.jpg")),
    background_night: image_from_url(embed_base64("images/mojave-night.jpg")),
    logo_wrike: image_from_url(embed_base64("images/wrike_full.png")),
    logo_iron_big: image_from_url(embed_base64("images/iron_big_logo.png")),
    default_avatar: image_from_url(embed_base64("images/default_avatar.png")),
    people: [
      image_from_url(embed_base64("images/people/1.jpg")),
      image_from_url(embed_base64("images/people/2.jpg")),
      image_from_url(embed_base64("images/people/3.jpg")),
      image_from_url(embed_base64("images/people/4.jpg")),
      image_from_url(embed_base64("images/people/5.jpg")),
      image_from_url(embed_base64("images/people/6.jpg")),
      image_from_url(embed_base64("images/people/7.jpg")),
      image_from_url(embed_base64("images/people/8.jpg"))
    ]
  };
  var tokens = draw_code_editor.toString().split("\n").map(tokenize_code);
  function app_icon(app) {
    switch (app) {
      case 0:
        return images.icon_app_code_junkie;
      case 1:
        return images.icon_app_limp;
      case 2:
        return images.icon_app_wrike;
      case 3:
        return images.icon_app_clndr;
      case 4:
        return images.icon_app_iron;
    }
  }
  var Token_Kind;
  (function(Token_Kind2) {
    Token_Kind2[Token_Kind2["code"] = 0] = "code";
    Token_Kind2[Token_Kind2["keyword"] = 1] = "keyword";
    Token_Kind2[Token_Kind2["number"] = 2] = "number";
    Token_Kind2[Token_Kind2["string"] = 3] = "string";
    Token_Kind2[Token_Kind2["comment"] = 4] = "comment";
  })(Token_Kind || (Token_Kind = {}));
  function difficulty_name(difficulty) {
    switch (difficulty) {
      case 0:
        return i18n.difficulty.junior();
      case 1:
        return i18n.difficulty.middle();
      case 2:
        return i18n.difficulty.senior();
      case 3:
        return i18n.difficulty.teamlead();
    }
  }
  function tokenize_code(line) {
    const tokens2 = [];
    let in_string = false;
    let previous = "";
    let current_token_start = 0;
    let current_word_start = 0;
    let index = 0;
    function push_token(kind, text) {
      tokens2.push({
        kind,
        text
      });
      current_word_start = index;
      current_token_start = index;
    }
    const keywords = [";", "const", "let", "function", "if"];
    function push_remains(text) {
      if (text.length == 0)
        return;
      if (keywords.includes(text)) {
        push_token(1, text);
      } else if (/^\d+$/.test(text)) {
        push_token(2, text);
      } else {
        push_token(0, text);
      }
    }
    for (index = 0; index < line.length; index++) {
      const char = line[index];
      const token_text = line.substring(current_token_start, index);
      if (char == "/" && previous == "/") {
        push_remains(line.substring(current_token_start, index - 1));
        push_token(4, line.substring(index - 1));
        return tokens2;
      }
      if (in_string) {
        if (char == '"') {
          index++;
          push_token(3, line.substring(current_token_start, index));
          in_string = false;
        }
      } else {
        const until_word = line.substring(current_token_start, current_word_start);
        const word = line.substring(current_word_start, index);
        if (keywords.includes(word)) {
          push_remains(until_word);
          push_token(1, word);
        } else if (/^\d+$/.test(word)) {
          push_remains(until_word);
          push_token(2, word);
        }
        if (char == " " || char == "(" || char == ")" || char == ",") {
          current_word_start = index + 1;
        }
        if (char == '"') {
          push_remains(token_text);
          in_string = true;
        }
      }
      previous = char;
    }
    push_remains(line.substring(current_token_start));
    return tokens2;
  }
  function all_tasks() {
    return game.backlog;
  }
  function free_tasks() {
    const free = [];
    for (const task of all_tasks())
      if (task.status == 0)
        free.push(task);
    return free;
  }
  function tasks_not_done() {
    return all_tasks().filter((task) => task.status != 4).length;
  }
  function change_task(task, new_state) {
    Object.assign(task, new_state);
  }
  function assign_task(task, assignee) {
    const skills_non_possessed = assignee.you ? 0 : task.required_skills.filter((skill) => assignee.teammate.skills.includes(skill)).length;
    change_task(task, {
      ...task,
      status: 1,
      assigned_to: assignee,
      remaining_work_hours: task.estimated_time + skills_non_possessed * 2,
      developer_stuck_hours: 0,
      bugs: 0,
      tests_written: false,
      instructions_for_qa_written: false,
      has_already_stuck_once: false
    });
  }
  function pass_task_to_review(task) {
    change_task(task, {
      ...task,
      status: 2,
      remaining_work_hours: 8
    });
  }
  function return_task_from_review_to_development(task, found_bugs) {
    for (const entry of game.inbox) {
      if (entry.type == 0 && entry.task == task) {
        entry.read = true;
      }
    }
    change_task(task, {
      ...task,
      status: 1,
      developer_stuck_hours: 0,
      remaining_work_hours: found_bugs,
      tests_written: false,
      instructions_for_qa_written: false,
      bugs: task.bugs - found_bugs,
      has_already_stuck_once: false
    });
  }
  function return_task_from_qa_to_development(task, found_bugs) {
    change_task(task, {
      ...task,
      status: 1,
      developer_stuck_hours: 0,
      remaining_work_hours: found_bugs,
      tests_written: false,
      instructions_for_qa_written: false,
      bugs: task.bugs - found_bugs,
      has_already_stuck_once: false
    });
    game.inbox.push({
      type: 1,
      received_at_day_of_week: game.day_of_week,
      received_at_hour: game.hour_of_day,
      task,
      read: false
    });
  }
  function pass_task_to_qa(task, work_hours) {
    for (const entry of game.inbox) {
      if (entry.type == 0 && entry.task == task) {
        entry.read = true;
      }
    }
    change_task(task, {
      ...task,
      status: 3,
      remaining_work_hours: work_hours
    });
  }
  function deploy_task(task) {
    change_task(task, {
      ...task,
      status: 4,
      can_backfire_on_prod: Math.random() > 0.3,
      defects_found_on_prod: false
    });
    if (game.backlog.every((task2) => task2.status == 4)) {
      show_overlay({type: 14, reason: 0});
    }
  }
  function is_work_time() {
    return game.hour_of_day >= work_start_hour && game.hour_of_day < work_end_hour && game.day_of_week <= work_days;
  }
  function increase_burnout_if_working_past_work_time() {
    if (!is_work_time()) {
      game.player.burnout = Math.min(100, game.player.burnout + 5);
      if (game.player.burnout == 100) {
        show_overlay({type: 14, reason: 4});
      }
    }
  }
  function increase_health(by_how_much) {
    game.player.health = Math.min(game.player.health + by_how_much, 100);
  }
  function path_rounded_rect(x3, y, w, h, r) {
    if (w < 2 * r)
      r = w / 2;
    if (h < 2 * r)
      r = h / 2;
    const path = new Path2D();
    path.moveTo(x3 + r, y);
    path.arcTo(x3 + w, y, x3 + w, y + h, r);
    path.arcTo(x3 + w, y + h, x3, y + h, r);
    path.arcTo(x3, y + h, x3, y, r);
    path.arcTo(x3, y, x3 + w, y, r);
    return path;
  }
  function path_circle(x3, y, r) {
    const ctx = current_context();
    ctx.beginPath();
    ctx.arc(x3, y, r, 0, Math.PI * 2);
    ctx.closePath();
  }
  function draw_line(color, width, x1, y1, x22, y2) {
    const ctx = current_context();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x22, y2);
    ctx.closePath();
    ctx.stroke();
  }
  function fill_circle(color, x3, y, r) {
    const ctx = current_context();
    ctx.fillStyle = color;
    path_circle(x3, y, r);
    ctx.fill();
  }
  function increase_brightness(hex, percent) {
    hex = hex.startsWith("#") ? hex.substring(1) : hex;
    ;
    if (hex.length == 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }
    const r = parseInt(hex.substr(0, 2), 16), g = parseInt(hex.substr(2, 2), 16), b = parseInt(hex.substr(4, 2), 16);
    return "#" + (0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16).substr(1) + (0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16).substr(1) + (0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16).substr(1);
  }
  function status_color(status) {
    switch (status) {
      case 0:
        return "#2196F3";
      case 1:
        return "#00BCD4";
      case 2:
        return "#009688";
      case 3:
        return "#FFEB3B";
      case 4:
        return "#8BC34A";
    }
  }
  function status_title(status) {
    switch (status) {
      case 0:
        return "New";
      case 1:
        return "In development";
      case 2:
        return "Review is required";
      case 3:
        return "Testing in progress";
      case 4:
        return "Deployed";
    }
  }
  function mark_current_chat_as_read(app) {
    if (app.current_chat) {
      app.current_chat.messages_read = app.current_chat.messages.length;
    }
  }
  function draw_status_line(label2, value_text, value_relative) {
    const label_color = "#181F38";
    const value_color_high = "#08CF65";
    const value_color_low = "#CF0808";
    const padding_h = 20;
    const padding_v = 8;
    const spacing = 8;
    const font_h = 16;
    function hex_to_rgb(hex) {
      const value = parseInt(hex.substr(1), 16);
      const r = value >> 16 & 255;
      const g = value >> 8 & 255;
      const b = value & 255;
      return [r, g, b];
    }
    function lerp(a, b, x3) {
      return (b - a) * x3 + a;
    }
    const color_from = hex_to_rgb(value_color_low);
    const color_to = hex_to_rgb(value_color_high);
    const color_result = [
      lerp(color_from[0], color_to[0], value_relative),
      lerp(color_from[1], color_to[1], value_relative),
      lerp(color_from[2], color_to[2], value_relative)
    ];
    const color_string = `rgb(${color_result[0]}, ${color_result[1]}, ${color_result[2]})`;
    const ctx = current_context();
    push_font(font_h);
    const label_w = ctx.measureText(label2).width;
    pop_font();
    push_font(font_h, "bold");
    const value_w = ctx.measureText(value_text).width;
    pop_font();
    const block_w = padding_h + label_w + spacing + value_w + padding_h;
    const block_h = padding_v + font_h + padding_v;
    const xy2 = layout_cursor();
    const rect = path_rounded_rect(xy2.x, xy2.y, block_w, block_h, 32);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "white";
    ctx.fill(rect);
    const middle_y = xy2.y + padding_v + font_h / 2;
    push_font(font_h);
    ctx.fillStyle = label_color;
    ctx.fillText(label2, xy2.x + padding_h, middle_y);
    pop_font();
    push_font(font_h, "bold");
    ctx.fillStyle = color_string;
    ctx.fillText(value_text, xy2.x + padding_h + label_w + spacing, middle_y);
    pop_font();
    push_size(block_h + 8);
  }
  function draw_messenger(app, width, height) {
    const chat_list_background = "#3F0E40";
    const offline_chat_color = "#896B89";
    const read_chat_name = "#B39FB3";
    const unread_chat_name = "#fff";
    const notifications_bubble_background = "#E01E5A";
    const online_bubble_background = "#2BAC76";
    const selected_chat_background = "#1164A3";
    const hovered_chat_background = "#350D36";
    const chat_list_top_underline = "#FFFFFF1A";
    const text_color = "#1D1C1D";
    const subtext_color = "#6B6A6B";
    const offline_chat_top = "#606060";
    const top_bar_height = 64;
    const chat_list_width = 200;
    const message_input_height = 40;
    const message_input_bottom_margin = 24;
    const ctx = current_context();
    const padding = 27;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = chat_list_background;
    ctx.fillRect(0, 0, chat_list_width, height);
    push_font(15);
    push_font(15, "bold");
    ctx.fillStyle = "#fff";
    ctx.fillText("Chats", padding - 8, top_bar_height / 2);
    pop_font();
    ctx.fillStyle = read_chat_name;
    ctx.fillText("Direct Messages", padding - 8, top_bar_height + 25);
    draw_line(chat_list_top_underline, 1, 0.5, top_bar_height, chat_list_width - 0.5, top_bar_height);
    let offset_y = 0;
    const chat_height = 30;
    const status_bubble_r = 5;
    function draw_status_bubble(x3, y, online, selected) {
      path_circle(x3, y, status_bubble_r);
      if (online) {
        ctx.fillStyle = selected ? unread_chat_name : online_bubble_background;
        ctx.fill();
      } else {
        ctx.strokeStyle = selected ? unread_chat_name : offline_chat_color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    for (const teammate of game.team) {
      const center_y = top_bar_height + 55 + offset_y;
      const top_y = center_y - chat_height / 2;
      const state = button_behavior(0, top_y, chat_list_width, chat_height);
      const selected = app.current_chat == teammate;
      const hovered = state == 1;
      if (selected || hovered) {
        ctx.fillStyle = selected ? selected_chat_background : hovered_chat_background;
        ctx.fillRect(0.5, top_y, chat_list_width - 1, chat_height);
      }
      draw_status_bubble(padding + status_bubble_r, center_y, is_work_time(), selected);
      if (is_work_time()) {
        ctx.fillStyle = selected ? unread_chat_name : read_chat_name;
      } else {
        ctx.fillStyle = selected ? unread_chat_name : offline_chat_color;
      }
      ctx.fillText(teammate.name.nominative, padding + status_bubble_r * 2 + 7, center_y);
      if (state == 2) {
        mark_current_chat_as_read(app);
        app.current_chat = teammate;
        mark_current_chat_as_read(app);
      }
      const unread_messages = teammate.messages.length - teammate.messages_read;
      if (unread_messages > 0) {
        const unread_width = 24;
        const unread_height = 20;
        const unread_x = chat_list_width - padding - unread_width;
        const unread_y = center_y - unread_height / 2;
        const rect = path_rounded_rect(unread_x, unread_y, unread_width, unread_height, 14);
        ctx.fillStyle = notifications_bubble_background;
        ctx.fill(rect);
        push_font(15, "bold");
        const text = unread_messages.toString(10);
        const text_width = ctx.measureText(text).width;
        ctx.fillStyle = unread_chat_name;
        ctx.fillText(text, unread_x + unread_width / 2 - text_width / 2, center_y);
        pop_font();
      }
      offset_y += chat_height;
    }
    pop_font();
    {
      const top_bar_underline = "#E2E2E2";
      draw_line(top_bar_underline, 1, chat_list_width + 0.5, top_bar_height, width - 0.5, top_bar_height);
      push_font(15, "bold");
      if (app.current_chat) {
        const online = is_work_time();
        const x3 = chat_list_width + padding;
        const y = top_bar_height / 2;
        draw_status_bubble(x3, y, online, false);
        ctx.fillStyle = online ? "#000" : offline_chat_top;
        const name_width = ctx.measureText(app.current_chat.name.nominative).width;
        const name_x = x3 + status_bubble_r * 2 + 4;
        ctx.fillText(app.current_chat.name.nominative, name_x, y);
        const title_x = name_x + name_width + 12;
        push_font(15);
        ctx.fillStyle = subtext_color;
        ctx.fillText(app.current_chat.skill_title, title_x, y);
        pop_font();
      }
      pop_font();
    }
    if (app.current_chat) {
      const message_x = chat_list_width + padding;
      const messages_pane_width = width - chat_list_width - 0.5;
      const message_area_width = width - padding - message_x;
      const rect = new Path2D();
      rect.rect(chat_list_width + 0.5, top_bar_height + 0.5, messages_pane_width, height - top_bar_height - 0.5);
      push_clip(rect);
      const messages = app.current_chat.messages;
      let message_bottom_y = height - message_input_height - message_input_bottom_margin - 8;
      for (const message of [...messages].reverse()) {
        push_font(15);
        ctx.textBaseline = "top";
        const avatar_side = 36;
        const avatar_margin = 8;
        const lines_x = message_x + avatar_side + avatar_margin;
        const line_area_width = message_area_width - avatar_side - avatar_margin;
        const lines = text_to_lines(message.text, line_area_width);
        const line_height = 20;
        const message_header_height = line_height;
        const message_height = lines.length * line_height + message_header_height + 8;
        const message_top_y = message_bottom_y - message_height;
        const lines_y = message_top_y + message_header_height;
        {
          const rect2 = path_rounded_rect(message_x, message_top_y, avatar_side, avatar_side, 6);
          push_clip(rect2);
          ctx.drawImage(app.current_chat.avatar.img, message_x, message_top_y, avatar_side, avatar_side);
          pop_clip();
        }
        {
          push_font(15, "bold");
          const name_width = ctx.measureText(app.current_chat.name.nominative).width;
          ctx.fillStyle = text_color;
          ctx.fillText(app.current_chat.name.nominative, lines_x, message_top_y);
          pop_font();
          push_font(12);
          const time_text = `${hour_string(message.received_at_hour)}, ${day_of_week_name(message.received_at_day_of_week)}`;
          ctx.fillStyle = subtext_color;
          ctx.fillText(time_text, lines_x + name_width + 4, message_top_y + 2);
          pop_font();
        }
        {
          ctx.fillStyle = text_color;
          for (let index = 0; index < lines.length; index++) {
            ctx.fillText(lines[index], lines_x, lines_y + line_height * index);
          }
        }
        message_bottom_y -= message_height;
        ctx.textBaseline = "middle";
        pop_font();
      }
      pop_clip();
    }
    if (app.current_chat) {
      const message_input_outline = "#8E8D8E";
      const placeholder_text_color = "#C8C8C8";
      const top_left_x = chat_list_width + padding;
      const top_left_y = height - message_input_height - message_input_bottom_margin;
      const input_width = width - top_left_x - padding;
      const rect = path_rounded_rect(top_left_x, top_left_y, input_width, message_input_height, 4);
      ctx.strokeStyle = message_input_outline;
      ctx.lineWidth = 1;
      ctx.stroke(rect);
      if (app.current_chat) {
        push_font(15);
        ctx.fillStyle = placeholder_text_color;
        ctx.fillText(i18n.chat.action.message_teammate({name: app.current_chat.name}), top_left_x + 12, top_left_y + message_input_height / 2);
        pop_font();
        if (button_behavior(top_left_x, top_left_y, input_width, message_input_height) == 2) {
          const y = point_to_screen_space(top_left_x, top_left_y).y;
          show_overlay({
            type: 11,
            teammate: app.current_chat,
            at: {
              x: game.mouse.x,
              y
            }
          });
        }
      }
    }
  }
  function draw_wrike(app, width, height) {
    const bar_background = "#04454D";
    const background = "#F9F9F9";
    const block_background = "#FFFFFF";
    const inbox_text = "#4488FF";
    const inbox_warning = "#ff445a";
    const grid_color = "#EBEBEB";
    const grid_text_color = "#161616";
    const top_bar_height = 56;
    const bottom_bar_height = 24;
    const content_padding = 32;
    const content_height = height - top_bar_height - bottom_bar_height - content_padding - content_padding - content_padding;
    const ctx = current_context();
    const scroll = game.mouse.last_scroll_event;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    function entry_text(entry) {
      switch (entry.type) {
        case 0:
          return "Waiting for review";
        case 1:
          return "Defects found, returned to dev";
        case 2:
          return `Defects on prod (${entry.task.bugs}), ${entry.hours_remaining} hours left`;
      }
    }
    {
      ctx.fillStyle = bar_background;
      ctx.fillRect(0, 0, width, top_bar_height);
      ctx.fillStyle = bar_background;
      ctx.fillRect(0, height - bottom_bar_height, width, bottom_bar_height);
      const logo = images.logo_wrike.img;
      ctx.drawImage(logo, width / 2 - logo.width / 2 + 0.5, top_bar_height / 2 - logo.height / 2 + 0.5);
    }
    function draw_inbox(x3, y, entries) {
      const inbox_width = 300;
      const inbox_height = content_height;
      const inbox_x = x3;
      const inbox_y = y + content_padding;
      const block = draw_block(inbox_x, inbox_y, inbox_width, inbox_height);
      const entry_height = 90;
      push_clip(block, true);
      if (scroll && mouse_can_interact_with_area(scroll, inbox_x, inbox_y, inbox_width, inbox_height)) {
        const max_scroll = entries.length * entry_height;
        app.inbox_scroll_y = Math.max(0, Math.min(app.inbox_scroll_y + game.mouse.scroll_y, max_scroll - inbox_height));
      }
      ctx.translate(0, -app.inbox_scroll_y);
      const entry_x = inbox_x;
      let entry_y = inbox_y;
      const entry_padding = 16;
      if (entries.length > 0) {
        for (const entry of entries) {
          const state = button_behavior(entry_x, entry_y, inbox_width, entry_height);
          if (state == 1) {
            ctx.fillStyle = "#eee";
            ctx.fillRect(entry_x, entry_y, inbox_width, entry_height);
          }
          if (state == 2) {
            show_overlay({
              type: 13,
              entry,
              at: point_to_screen_space(entry_x + inbox_width, entry_y)
            });
          }
          push_font(15);
          const time_text = `${day_of_week_name(entry.received_at_day_of_week)}, ${hour_string(entry.received_at_hour)}`;
          const padded_x = entry_x + entry_padding;
          const time_y = entry_y + entry_padding;
          ctx.fillStyle = "#aaa";
          ctx.fillText(time_text, padded_x, time_y);
          const name_y = time_y + 24;
          ctx.fillStyle = "black";
          ctx.fillText(entry.task.name, padded_x, name_y);
          const text_y = name_y + 24;
          ctx.fillStyle = entry.type == 2 ? inbox_warning : inbox_text;
          ctx.fillText(entry_text(entry), padded_x, text_y);
          pop_font();
          draw_line(grid_color, 1, entry_x, entry_y + entry_height, entry_x + inbox_width, entry_y + entry_height);
          entry_y += entry_height;
        }
      } else {
        const text = "No messages yet, come back later!";
        const height2 = 14;
        push_font(height2);
        const width2 = ctx.measureText(text).width;
        ctx.fillStyle = "#888";
        const center_x = inbox_x + inbox_width / 2 - width2 / 2;
        const center_y = inbox_y + inbox_height / 2 - height2 / 2;
        ctx.fillText(text, center_x, center_y);
        pop_font();
      }
      pop_clip();
    }
    function draw_task_list(x3, y) {
      const tasks_label_y = top_bar_height + content_padding;
      const tasks_x = content_padding + content_padding;
      const tasks_width = width - tasks_x - content_padding;
      const tasks_y = tasks_label_y + content_padding;
      draw_block(tasks_x, tasks_y, tasks_width, content_height);
      const row_height = 24;
      const status_indicator_side = 12;
      let row_y = tasks_y + row_height;
      const name_column_x = tasks_x + 24;
      const status_column_x = name_column_x + 370;
      const assignee_column_x = status_column_x + 180;
      const estimate_column_x = assignee_column_x + 120;
      const time_spent_column_x = estimate_column_x + 90;
      {
        ctx.fillStyle = block_background;
        ctx.fillRect(tasks_x, tasks_y - 3, tasks_width, row_height + 3);
        push_font(12);
        ctx.fillStyle = "#777";
        ctx.fillText("Title", name_column_x, tasks_y + row_height / 2);
        ctx.fillText("Status", status_column_x, tasks_y + row_height / 2);
        ctx.fillText("Assignee", assignee_column_x, tasks_y + row_height / 2);
        ctx.fillText("Estimate", estimate_column_x, tasks_y + row_height / 2);
        ctx.fillText("Time Spent", time_spent_column_x, tasks_y + row_height / 2);
        pop_font();
      }
      const tasks_area_y = tasks_y + row_height;
      const tasks_area_height = content_height - row_height;
      const rect = new Path2D();
      rect.rect(tasks_x, tasks_area_y, tasks_width, tasks_area_height);
      push_clip(rect, true);
      if (scroll && mouse_can_interact_with_area(scroll, tasks_x, tasks_area_y, tasks_width, tasks_area_height)) {
        const max_scroll = all_tasks().length * row_height;
        app.task_list_scroll_y = Math.max(0, Math.min(app.task_list_scroll_y + game.mouse.scroll_y, max_scroll - tasks_area_height));
      }
      ctx.translate(0, -app.task_list_scroll_y);
      push_font(14);
      const tasks_fit_into_view = Math.ceil(tasks_area_height / row_height);
      const tasks_view_start_index = Math.floor(app.task_list_scroll_y / row_height);
      const tasks_end_index = tasks_view_start_index + tasks_fit_into_view;
      const tasks = all_tasks();
      for (let index = tasks_view_start_index; index < Math.min(tasks.length, tasks_end_index); index++) {
        const task = tasks[index];
        const row_y2 = tasks_y + row_height * (index + 1);
        const row_center_y = row_y2 + row_height / 2;
        {
          const state = button_behavior(tasks_x, row_y2, tasks_width, row_height);
          if (state == 1) {
            ctx.fillStyle = "#0094FF33";
            ctx.fillRect(tasks_x, row_y2, tasks_width, row_height);
          }
          if (state == 2) {
            show_overlay({
              type: 10,
              task,
              at: {
                x: game.mouse.x,
                y: point_to_screen_space(0, row_y2 + row_height).y
              }
            });
          }
        }
        {
          ctx.fillStyle = grid_text_color;
          ctx.fillText(task.full_name, name_column_x, row_center_y + 1);
        }
        {
          ctx.fillStyle = status_color(task.status);
          ctx.fillRect(status_column_x - 0.5, row_center_y - status_indicator_side / 2 - 0.5, status_indicator_side, status_indicator_side);
          const status_name_x = status_column_x + status_indicator_side + 10;
          ctx.fillStyle = grid_text_color;
          ctx.fillText(status_title(task.status), status_name_x, row_center_y + 1);
        }
        {
          const assignee = task_to_assignee(task);
          if (assignee) {
            ctx.fillStyle = grid_text_color;
            ctx.fillText(assignee.name, assignee_column_x, row_center_y + 1);
          }
        }
        {
          ctx.fillStyle = grid_text_color;
          ctx.fillText(`${task.estimated_time.toString(10)}h`, estimate_column_x, row_center_y + 1);
        }
        if (task.time_spent > 0) {
          ctx.fillStyle = grid_text_color;
          ctx.fillText(`${task.time_spent.toString(10)}h`, time_spent_column_x, row_center_y + 1);
        }
        draw_line(grid_color, 1, tasks_x, row_y2, tasks_x + tasks_width, row_y2);
      }
      ctx.translate(0, app.task_list_scroll_y);
      pop_font();
      pop_clip();
      draw_line(grid_color, 1, tasks_x, row_y, tasks_x + tasks_width, row_y);
      function draw_column_line(at_x) {
        draw_line(grid_color, 1, at_x, tasks_y, at_x, tasks_y + content_height);
      }
      draw_column_line(status_column_x - 10);
      draw_column_line(assignee_column_x - 10);
      draw_column_line(estimate_column_x - 10);
      draw_column_line(time_spent_column_x - 10);
    }
    function draw_block_title(text, x3, y) {
      push_font(18, "bolder");
      ctx.fillStyle = "#000";
      ctx.textBaseline = "top";
      ctx.fillText(text, x3, y);
      ctx.textBaseline = "middle";
      pop_font();
    }
    function draw_block(x3, y, w, h) {
      const rect = path_rounded_rect(x3, y, w, h, 3);
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#eee";
      ctx.shadowOffsetY = 10;
      ctx.fillStyle = block_background;
      ctx.fill(rect);
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      return rect;
    }
    function task_to_assignee(task) {
      if (task.status == 1) {
        if (task.assigned_to.you) {
          return {name: i18n.assigned_to_you()};
        } else {
          return {name: task.assigned_to.teammate.name.nominative, avatar: task.assigned_to.teammate.avatar};
        }
      } else if (task.status == 2) {
        if (task.assigned_to.you) {
        } else {
          return {name: i18n.assigned_to_you()};
        }
      } else if (task.status == 3) {
        return {name: "QA Team"};
      }
    }
    function draw_tab_button(tab, text, x3, y) {
      const height2 = 18;
      push_font(height2, "bolder");
      const width2 = ctx.measureText(text).width;
      const state = button_behavior(x3, y - height2 / 2, width2, height2);
      if (state == 2) {
        app.tab = tab;
      }
      if (state == 1) {
        ctx.fillStyle = "#0287c4";
      } else if (app.tab == tab) {
        ctx.fillStyle = "#000";
      } else {
        ctx.fillStyle = "#888";
      }
      ctx.fillText(text, x3, y);
      pop_font();
      return width2;
    }
    const tab_bar_x = content_padding + content_padding;
    const tab_bar_y = top_bar_height + content_padding;
    let cursor_x = 0;
    cursor_x += draw_tab_button("task_list", "Tasks", tab_bar_x, tab_bar_y);
    cursor_x += draw_tab_button("inbox", "Inbox", tab_bar_x + cursor_x + 8, tab_bar_y);
    const unread_entries = game.inbox.filter((entry) => !entry.read);
    if (unread_entries.length > 0) {
      draw_notification_bubble(tab_bar_x + cursor_x + 20, tab_bar_y, 8, unread_entries.length);
    }
    if (app.tab == "inbox") {
      draw_inbox(tab_bar_x, tab_bar_y, unread_entries);
    }
    if (app.tab == "task_list") {
      draw_task_list(tab_bar_x, tab_bar_y);
    }
  }
  function draw_code_editor(width, height) {
    const ctx = current_context();
    const ui_background = "#3C3F41";
    const code_background = "#2B2B2B";
    const selected_tab_bg = "#4E5254";
    const tab_separator_line = "#323232";
    const tab_underline = "#4A88C7";
    const tab_name_color = "#BBBBBB";
    const keyword_color = "#CC7832";
    const string_color = "#6A8759";
    const number_color = "#6897BB";
    const code_color = "#A9B7C6";
    const comment_color = "#808080";
    const tab_height = 26;
    const tab_padding = 7;
    ctx.fillStyle = code_background;
    ctx.fillRect(0, 0, width, height);
    if (button_behavior(0, 0, width, height) == 2) {
      show_overlay({type: 8});
    }
    {
      ctx.fillStyle = ui_background;
      ctx.fillRect(0.5, 0, width - 1.5, tab_height);
      const tab_names = [
        "UtilTokenGlobalInitializerServlet",
        "RulesNotificationNotificationTokenTokenizer",
        "ServiceTokenProxyStringTokenizer",
        "StringServiceRulesProxyUtil",
        "InitializerTokenBusinessManagementObject",
        "BusinessRulesStringInitializerRegistry"
      ];
      let tab_x = 1;
      for (let index = 0; index < tab_names.length; index++) {
        push_font(12);
        const name = tab_names[index];
        const tab_width = tab_padding + ctx.measureText(name).width + tab_padding;
        const selected = index == 0;
        ctx.lineWidth = 1;
        ctx.strokeStyle = tab_separator_line;
        ctx.fillStyle = selected ? selected_tab_bg : ui_background;
        ctx.beginPath();
        ctx.rect(tab_x, 0, tab_width, tab_height);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = tab_name_color;
        ctx.fillText(name, tab_x + tab_padding, tab_height / 2);
        if (selected) {
          draw_line(tab_underline, 2, tab_x, tab_height - 1, tab_x + tab_width - 1.5, tab_height - 1);
        }
        tab_x += tab_width;
        pop_font();
      }
    }
    {
      ctx.textBaseline = "top";
      const line_height = 20;
      const code_top_y = tab_height + 4;
      push_font(12, "normal", true);
      for (const [index, line] of tokens.entries()) {
        let draw_token = function(token, color, bold = false) {
          push_font(12, bold ? "bold" : "normal", true);
          const width2 = ctx.measureText(token.text).width;
          ctx.fillStyle = color;
          ctx.fillText(token.text, token_x, code_top_y + index * line_height);
          token_x += width2;
          pop_font();
        };
        let token_x = 8;
        for (const token of line) {
          switch (token.kind) {
            case 0: {
              draw_token(token, code_color);
              break;
            }
            case 1: {
              draw_token(token, keyword_color, true);
              break;
            }
            case 2: {
              draw_token(token, number_color);
              break;
            }
            case 3: {
              draw_token(token, string_color);
              break;
            }
            case 4: {
              draw_token(token, comment_color);
              break;
            }
            default:
              unreachable(token.kind);
          }
        }
      }
      pop_font();
      ctx.textBaseline = "middle";
    }
  }
  function draw_browser(width, height) {
    const website_button_background = "#F1F3F4";
    const ctx = current_context();
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    const logo = images.logo_iron_big.img;
    const scale = 0.5;
    const logo_width = logo.width * scale;
    ctx.drawImage(logo, width / 2 - logo_width / 2, 100, logo_width, logo.height * scale);
    const total_buttons = 2;
    const button_side = 72;
    const button_spacing = 32;
    const buttons_width = total_buttons * button_side + (total_buttons - 1) * button_spacing;
    const button_center_y = 270;
    let button_left_x = width / 2 - buttons_width / 2;
    function website_button(logo2, text, website) {
      const r = button_side / 2;
      const icon_side = button_side - 28;
      path_circle(button_left_x + r, button_center_y, r);
      const state = button_behavior(button_left_x, button_center_y - r, button_side, button_side);
      if (state == 1) {
        ctx.shadowColor = "#ccc";
        ctx.shadowBlur = 8;
      }
      ctx.fillStyle = website_button_background;
      ctx.fill();
      ctx.shadowBlur = 0;
      const image_x = button_left_x + r - icon_side / 2;
      const image_y = button_center_y - icon_side / 2;
      ctx.drawImage(logo2.img, image_x, image_y, icon_side, icon_side);
      ctx.fillStyle = "#000";
      push_font(16);
      const text_width = ctx.measureText(text).width;
      const text_x = button_left_x + r - text_width / 2;
      const text_y = button_center_y + r + 25;
      ctx.fillText(text, text_x, text_y);
      pop_font();
      button_left_x += button_side + button_spacing;
      if (state == 2) {
        show_overlay({
          type: 12,
          website,
          at: point_to_screen_space(button_left_x + r, button_center_y)
        });
      }
    }
    website_button(images.icon_web_jabr, i18n.website.blog(), 0);
    website_button(images.icon_web_you_cube, i18n.website.videos(), 1);
  }
  function draw_window(width, height, title, draw_content) {
    const title_text_color = "#2E2C2E";
    const title_bar_top = "#E8E6E8";
    const title_bar_bottom = "#D2D0D2";
    const title_bar_underline = "#B0AFB0";
    const close_button_fill = "#FC625D";
    const close_button_stroke = "#EF4B47";
    const minimize_button_fill = "#35C94A";
    const minimize_button_stroke = "#26A934";
    const title_bar_height = 21;
    const start_at = layout_cursor();
    const ctx = current_context();
    const transform = ctx.getTransform();
    ctx.translate(start_at.x, start_at.y);
    {
      const gradient = ctx.createLinearGradient(0, 0, 0, title_bar_height);
      gradient.addColorStop(0, title_bar_top);
      gradient.addColorStop(1, title_bar_bottom);
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#333";
      const rect = path_rounded_rect(0, 0, width, height + title_bar_height, 4);
      ctx.fill(rect);
      ctx.shadowBlur = 0;
      push_clip(rect);
    }
    {
      draw_line(title_bar_underline, 1, 0, title_bar_height, width, title_bar_height);
    }
    {
      const title_font = 12;
      push_font(title_font);
      const title_text_width = ctx.measureText(title).width;
      ctx.fillStyle = title_text_color;
      ctx.fillText(title, width / 2 - title_text_width / 2, title_bar_height / 2);
      pop_font();
    }
    let button_index = 0;
    function title_bar_button(fill, stroke) {
      const button_r = 6;
      const x_offset = 8 + (8 + button_r * 2) * button_index;
      const y_offset = 5;
      const result = button_behavior(x_offset, y_offset, button_r * 2, button_r * 2);
      ctx.fillStyle = result == 1 ? increase_brightness(fill, 20) : fill;
      ctx.strokeStyle = result == 1 ? increase_brightness(stroke, 20) : stroke;
      ctx.lineWidth = 1;
      path_circle(x_offset + button_r, y_offset + button_r, button_r);
      ctx.fill();
      ctx.stroke();
      button_index++;
      if (result == 2) {
        close_current_app();
      }
    }
    title_bar_button(close_button_fill, close_button_stroke);
    title_bar_button(minimize_button_fill, minimize_button_stroke);
    ctx.translate(0, title_bar_height + 1);
    draw_content();
    pop_clip();
    ctx.setTransform(transform);
  }
  function should_draw_day_end_tip() {
    return game.day == 0 && game.hour_of_day >= work_end_hour && game.overlay.type != 9;
  }
  function draw_top_bar(width) {
    const ctx = current_context();
    const color_bg = "rgba(210,210,210,0.4)";
    const height = 22;
    ctx.fillStyle = color_bg;
    ctx.fillRect(0, 0, width, height);
    const padding_side = 20;
    {
      const logo_side = 16;
      const pear_x = padding_side;
      const pear_y = height / 2 - logo_side / 2;
      ctx.drawImage(images.logo_pear.img, padding_side, pear_y, logo_side, logo_side);
      const name_x = pear_x + logo_side + 6;
      const name_y = height / 2 + 1;
      const name = i18n.app.computer.name();
      push_font(14, "bold");
      const name_width = ctx.measureText(name).width;
      ctx.fillStyle = "black";
      ctx.fillText(name, name_x, name_y);
      pop_font();
      const total_width = name_x + name_width - pear_x + 4;
      const button2 = button_behavior(pear_x, 0, total_width, height);
      if (button2 == 2) {
        show_overlay({
          type: 9,
          at: {
            x: pear_x,
            y: height
          }
        });
      } else if (button2 == 1) {
        ctx.fillStyle = "rgba(99,161,255,0.4)";
        ctx.fillRect(pear_x, 0, total_width, height);
      }
      if (should_draw_day_end_tip()) {
        ctx.fillStyle = "#fff";
        const tip_text = i18n.top_bar.finish_work_tip();
        const tip_x = (Math.sin(game.time / 250) + 1) * 15 + name_x + name_width + 32;
        const tip_y = 4;
        push_font(15);
        const tip_text_width = ctx.measureText(tip_text).width;
        const tip_width = 16 + tip_text_width + 16;
        const tip_height = 28;
        const rect = path_rounded_rect(tip_x, tip_y, tip_width, tip_height, 4);
        ctx.shadowBlur = 8;
        ctx.shadowColor = "black";
        ctx.fill(rect);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "black";
        ctx.fillText(tip_text, tip_x + 16, tip_y + tip_height / 2);
        pop_font();
        ctx.beginPath();
        ctx.moveTo(tip_x - 5, tip_y);
        ctx.lineTo(tip_x - 5, tip_y + tip_height);
        ctx.lineTo(tip_x - tip_height * 0.75, tip_y + tip_height / 2);
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#777";
        ctx.fill();
        ctx.stroke();
      }
    }
    {
      const time_text = hour_string(game.hour_of_day);
      push_font(14, "bolder");
      const time_width = ctx.measureText(time_text).width;
      ctx.fillStyle = "black";
      ctx.fillText(time_text, width - padding_side - time_width, height / 2);
      pop_font();
      const day_text = i18n.top_bar.today({day: game.day + 1, day_of_week: day_of_week_name(game.day_of_week)});
      push_font(14);
      const day_width = ctx.measureText(day_text).width;
      ctx.fillStyle = "black";
      ctx.fillText(day_text, width - padding_side - time_width - day_width - 6, height / 2);
      pop_font();
    }
    {
      const text = i18n.feedback_note();
      const font_size = 12;
      push_font(font_size);
      const text_width = ctx.measureText(text).width;
      ctx.fillStyle = "rgba(33,33,33,0.6)";
      ctx.fillText(text, width - padding_side - text_width, height + font_size / 2 + 8);
      pop_font();
    }
  }
  function draw_notification_bubble(x3, y, r, notifications) {
    const notifications_color = "#F44542";
    fill_circle(notifications_color, x3, y, r);
    const bubble_text = notifications.toString(10);
    push_font(r + 4);
    const ctx = current_context();
    const text_width = ctx.measureText(bubble_text).width;
    ctx.fillStyle = "#fff";
    ctx.fillText(bubble_text, x3 - text_width / 2, y);
    pop_font();
  }
  function draw_dock(width, height) {
    const color_top = "rgba(210,210,210,0.4)";
    const color_bottom = "rgba(191,191,191,0.4)";
    const start_at = layout_cursor();
    const ctx = current_context();
    ctx.translate(start_at.x, start_at.y);
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, color_top);
    gradient.addColorStop(1, color_bottom);
    ctx.fillStyle = gradient;
    const rect = path_rounded_rect(0, 0, width, height, 8);
    ctx.fill(rect);
    let app_index = 0;
    function ease_out_circular(x3) {
      return Math.sqrt(1 - Math.pow(x3 - 1, 2));
    }
    const hover_animation_time_ms = 60;
    for (const app of game.apps) {
      const image = app_icon(app.type).img;
      const adjust = ease_out_circular(app.dock_hover_time / hover_animation_time_ms) * 15;
      const notifications = get_app_notifications(app);
      const x3 = 16 + app_index * (64 + 16) - adjust / 2;
      const y = 16 - adjust / 2;
      const w = 64 + adjust, h = 64 + adjust;
      ctx.drawImage(image, 0, 0, image.width, image.height, x3, y, w, h);
      if (notifications > 0) {
        const bubble_x = x3 + w;
        const bubble_y = 16 - adjust / 2;
        draw_notification_bubble(bubble_x, bubble_y, 12, notifications);
      }
      const result = button_behavior(x3, y, w, h);
      if (result == 1) {
        app.dock_hover_time = Math.min(app.dock_hover_time + game.frame_time, hover_animation_time_ms);
      } else if (result == 2) {
        close_current_app();
        game.current_app = app;
      } else {
        app.dock_hover_time = Math.max(0, app.dock_hover_time - game.frame_time);
      }
      app_index++;
    }
    ctx.translate(-start_at.x, -start_at.y);
    push_size(height);
  }
  function hour_string(hour) {
    return `${hour.toString(10).padStart(2, "0")}:00`;
  }
  function draw_calendar(width) {
    function calendar_event_name(event) {
      switch (event.type) {
        case 0:
          return `One on One - ${event.teammate.name.nominative}`;
        case 1:
          return "Team Lead Sync";
        case 2:
          return `Interview - ${event.candidate_name}`;
        case 3:
          return "Daily Standup";
        case 4:
          return "Knowledge Sharing";
        case 5:
          return "Lunch";
      }
    }
    const text_color = "#70757A";
    const grid_color = "#DADCE0";
    const today_color = "#1A73E8";
    const now_color = "#EA4335";
    const event_color = "#039BE5";
    const past_event_color = "#B3E1F7";
    const past_event_text_color = "#69818D";
    const ctx = current_context();
    const cell_height = 48;
    const total_hours = work_end_hour - work_start_hour;
    const grid_starts_at = 90;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, (total_hours + 1) * cell_height);
    draw_line(grid_color, 1, grid_starts_at, 0, grid_starts_at, (total_hours + 1) * cell_height);
    function hour_grid_y(hour) {
      return (-(work_start_hour - hour) + 0.5) * cell_height;
    }
    for (let hour = work_start_hour; hour <= work_end_hour; hour++) {
      const y2 = hour_grid_y(hour);
      push_font(10);
      ctx.fillStyle = text_color;
      ctx.fillText(`${hour_string(hour)}`, 50, y2);
      pop_font();
      draw_line(grid_color, 1, grid_starts_at - 10, y2, width, y2);
      for (const event of game.today_events) {
        if (event.start_hour == hour) {
          const past_event = is_past_event(event);
          ctx.fillStyle = past_event ? past_event_color : event_color;
          const event_width = width - grid_starts_at;
          const event_height = event.duration * cell_height - 4;
          const rect = path_rounded_rect(grid_starts_at, y2, event_width, event_height, 4);
          ctx.fill(rect);
          const event_x = grid_starts_at;
          const event_y = y2;
          const state = button_behavior(event_x, event_y, event_width, event_height);
          if (state == 2) {
            const screen_space = point_to_screen_space(event_x + event_width / 2, event_y + event_height);
            show_overlay({
              type: 6,
              event,
              at: {
                x: screen_space.x,
                y: screen_space.y
              }
            });
          }
          const old_baseline = ctx.textBaseline;
          ctx.fillStyle = past_event ? past_event_text_color : "#fff";
          ctx.textBaseline = "top";
          const pad_x = 8;
          const pad_y = 6;
          push_font(12, "bold");
          ctx.fillText(calendar_event_name(event), grid_starts_at + pad_x, y2 + pad_y);
          pop_font();
          push_font(12, "normal");
          ctx.fillText(`${hour_string(hour)} - ${hour_string(hour + event.duration)}`, grid_starts_at + pad_x, y2 + pad_y + 16);
          pop_font();
          ctx.textBaseline = old_baseline;
        }
      }
    }
    const r = 6;
    const y = hour_grid_y(game.hour_of_day);
    fill_circle(now_color, grid_starts_at, y, r);
    draw_line(now_color, 2, grid_starts_at, y, width, y);
  }
  function open_app(type) {
    game.current_app = game.apps.find((app) => app.type == type);
  }
  function close_current_app() {
    if (game.current_app && game.current_app.type == 1) {
      mark_current_chat_as_read(game.current_app);
    }
    delete game.current_app;
  }
  function overlay_show_time() {
    return game.overlay.type == 14 ? 2e3 : 100;
  }
  function draw_overlay_screen() {
    const overlay = game.overlay;
    function draw_menu_background(x3, y, width, height) {
      const rect = path_rounded_rect(x3, y, width, height, 4);
      const opacity = (game.time - game.overlay_shown_at) / overlay_show_time();
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(119, 119, 119, ${opacity})`;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill(rect);
      ctx.shadowBlur = 0;
      return rect;
    }
    function auto_menu(x3, y, width) {
      const buttons = [];
      const button_height = 40;
      const after_message_spacing = 8;
      let message_font = 16;
      let padding = 16;
      let message_bottom_y = y;
      let lines = [];
      let line_height = 0;
      let center_text = false;
      return {
        x: x3,
        y,
        message_font(value) {
          message_font = value;
        },
        center_text() {
          center_text = true;
        },
        padding(value) {
          padding = value;
        },
        message(text) {
          line_height = message_font + 4;
          push_font(message_font);
          lines = text_to_lines(text, width - padding * 2);
          message_bottom_y = y + padding + lines.length * line_height;
          pop_font();
        },
        button(text) {
          if (buttons.length == 0 && lines.length > 0) {
            message_bottom_y += after_message_spacing;
          }
          const button_y = message_bottom_y + buttons.length * button_height;
          const state = button_behavior(x3, button_y, width, button_height);
          buttons.push({
            text,
            hovered: state == 1
          });
          return state == 2;
        },
        finish() {
          const height = message_bottom_y - y + buttons.length * button_height + (buttons.length == 0 ? padding : 0);
          const rect = draw_menu_background(x3, y, width, height);
          push_clip(rect);
          let line_y = y + padding;
          push_font(message_font);
          ctx.textBaseline = "top";
          for (const line of lines) {
            const text_x = center_text ? x3 + (width / 2 - ctx.measureText(line).width / 2) : x3 + padding;
            ctx.fillStyle = "#000";
            ctx.fillText(line, text_x, line_y);
            line_y += line_height;
          }
          ctx.textBaseline = "middle";
          pop_font();
          let button_y = message_bottom_y;
          push_font(16);
          for (const button2 of buttons) {
            if (button2.hovered) {
              ctx.fillStyle = "#ccc";
              ctx.fillRect(x3, button_y, width, button_height);
            }
            ctx.fillStyle = lines.length > 0 ? "#003a57" : "#000";
            ctx.fillText(button2.text, x3 + padding, button_y + button_height / 2, width);
            button_y += button_height;
          }
          pop_font();
          pop_clip();
        }
      };
    }
    function message_overlay(text) {
      message_overlay_and_then({type: 0}, text);
    }
    function message_overlay_and_then(overlay2, text) {
      show_overlay({type: 7, text, next_overlay: overlay2});
    }
    function exit_overlay() {
      show_overlay({type: 0});
    }
    function allow_exit() {
      if (button_behavior(0, 0, game.canvas_width, game.canvas_height) == 2) {
        exit_overlay();
      }
    }
    function block_exit() {
      button_behavior(0, 0, game.canvas_width, game.canvas_height);
    }
    function big_centered_menu(at_height = 0.45, width = 600) {
      const menu = auto_menu(game.canvas_width / 2 - width / 2, game.canvas_height * at_height, width);
      menu.padding(16);
      menu.message_font(20);
      return menu;
    }
    function deadline_stats_message(show_total_tasks) {
      const days_until = game.deadline_day - game.day;
      const not_done = tasks_not_done();
      const total = game.backlog.length;
      const text_days_until = i18n.deadline_stats.days_until({days: days_until});
      if (show_total_tasks) {
        const text_tasks_remaining = i18n.deadline_stats.tasks_remaining({tasks: not_done, total: total.toString()});
        return `${text_days_until}
${text_tasks_remaining}`;
      } else {
        const text_tasks_remaining = i18n.deadline_stats.backlog({tasks: not_done});
        return `${text_days_until}
${text_tasks_remaining}`;
      }
    }
    function new_day_message() {
      message_overlay(`${day_of_week_starts(game.day_of_week)}
${deadline_stats_message(true)}`);
    }
    const ctx = current_context();
    switch (overlay.type) {
      case 0: {
        break;
      }
      case 7: {
        const menu = big_centered_menu();
        menu.center_text();
        menu.padding(32);
        menu.message(overlay.text);
        menu.finish();
        if (button_behavior(0, 0, game.canvas_width, game.canvas_height) == 2) {
          show_overlay(overlay.next_overlay);
        }
        break;
      }
      case 1: {
        const menu = big_centered_menu();
        menu.center_text();
        menu.message("Language");
        for (const [name, language] of [["English", en_default], ["Russian", ru_default]]) {
          if (menu.button(name)) {
            i18n = language;
            start_game();
            show_overlay({type: 2});
          }
        }
        menu.finish();
        block_exit();
        break;
      }
      case 2: {
        const menu = big_centered_menu();
        menu.center_text();
        const team = game.team.map((teammate) => i18n.overlay.intro.teammate({name: teammate.name, skills: teammate.skills.map(skill_name).join(", ")})).join("\n");
        menu.message(i18n.overlay.intro.header({team}));
        for (const difficulty of [
          [0, 0.3],
          [1, 0.5],
          [2, 0.7],
          [3, 0.9]
        ]) {
          const [kind, multiplier] = difficulty;
          if (menu.button(i18n.overlay.intro.difficulty({difficulty: difficulty_name(difficulty[0])}))) {
            game.backlog = generate_backlog(game.team.length + 1, game.deadline_day, multiplier * 0.5);
            game.difficulty = kind;
            for (const teammate of game.team) {
              teammate.skill_level = Math.max(0.1, teammate.skill_level - multiplier * 0.35);
            }
            message_overlay(deadline_stats_message(false));
          }
        }
        menu.finish();
        block_exit();
        break;
      }
      case 5: {
        const menu = big_centered_menu();
        menu.center_text();
        menu.message(i18n.overlay.weekend.message({day_started: day_of_week_starts(game.day_of_week)}));
        if (menu.button(i18n.overlay.weekend.action.rest())) {
          do {
            skip_hours(1);
            increase_health(4);
          } while (!(game.day_of_week == 1 && game.hour_of_day == 10));
          new_day_message();
        }
        if (menu.button(i18n.overlay.weekend.action.do_something_else())) {
          exit_overlay();
        }
        menu.finish();
        block_exit();
        break;
      }
      case 6: {
        const top_center = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(top_center.x - menu_width / 2, top_center.y, menu_width);
        if (overlay.event.start_hour == game.hour_of_day) {
          if (overlay.event.type == 5) {
            if (menu.button(i18n.overlay.calendar.action.lunch())) {
              const food = [
                i18n.overlay.calendar.lunch.food.v1(),
                i18n.overlay.calendar.lunch.food.v2(),
                i18n.overlay.calendar.lunch.food.v3(),
                i18n.overlay.calendar.lunch.food.v4(),
                i18n.overlay.calendar.lunch.food.v5(),
                i18n.overlay.calendar.lunch.food.v6(),
                i18n.overlay.calendar.lunch.food.v7()
              ];
              game.player.attended_meetings_today.push(overlay.event.type);
              skip_hours(1);
              increase_health(10);
              message_overlay(i18n.overlay.calendar.lunch.message({food: random_in_array(food)}));
            }
          }
          if (overlay.event.type == 3) {
            menu.message(i18n.overlay.calendar.standup.info());
            if (menu.button(i18n.overlay.calendar.action.standup())) {
              game.player.attended_meetings_today.push(overlay.event.type);
              close_current_app();
              show_overlay({
                type: 3,
                queue: [...game.team],
                random_verb_divisible: Math.round(Math.random() * 65536)
              });
            }
          }
          if (overlay.event.type == 0) {
            menu.message(i18n.overlay.calendar.one_on_one.info());
            if (menu.button(i18n.overlay.calendar.action.one_on_one())) {
              game.player.attended_meetings_today.push(overlay.event.type);
              overlay.event.teammate.skill_level += 0.05;
              skip_hours(1);
              message_overlay(i18n.overlay.calendar.one_on_one.message({name: overlay.event.teammate.name}));
            }
          }
          if (overlay.event.type == 4) {
            menu.message(i18n.overlay.calendar.knowledge_sharing.info({topic: overlay.event.topic}));
            if (menu.button(i18n.overlay.calendar.action.knowledge_sharing())) {
              game.player.attended_meetings_today.push(overlay.event.type);
              game.player.productivity += 20;
              skip_hours(1);
              message_overlay(i18n.overlay.calendar.knowledge_sharing.message({topic: overlay.event.topic}));
            }
          }
          if (overlay.event.type == 2) {
            menu.message(i18n.overlay.calendar.interview.info());
            if (menu.button(i18n.overlay.calendar.action.interview())) {
              game.player.attended_meetings_today.push(overlay.event.type);
              skip_hours(2);
              message_overlay(i18n.overlay.calendar.interview.message({candidate_name: overlay.event.candidate_name}));
            }
          }
          if (overlay.event.type == 1) {
            menu.message(i18n.overlay.calendar.lead_meeting.info());
            if (menu.button(i18n.overlay.calendar.action.lead_meeting())) {
              game.player.attended_meetings_today.push(overlay.event.type);
              skip_hours(1);
              message_overlay(i18n.overlay.calendar.lead_meeting.message());
            }
          }
          if (menu.button(i18n.overlay.calendar.action.do_something_else())) {
            exit_overlay();
          }
        } else {
          if (overlay.event.start_hour < game.hour_of_day) {
            if (game.hour_of_day < overlay.event.start_hour + overlay.event.duration) {
              menu.message(i18n.overlay.calendar.already_started());
            } else {
              menu.message(i18n.overlay.calendar.already_finished());
            }
          } else {
            menu.message(i18n.overlay.calendar.not_started_yet());
          }
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 12: {
        const center = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(center.x - menu_width / 2, center.y + 32, menu_width);
        if (overlay.website == 0) {
          menu.message(i18n.overlay.browser.jabr());
          if (menu.button(i18n.overlay.browser.action.read_jabr())) {
            skip_hours(1);
            message_overlay(i18n.overlay.browser.jabr_read());
            game.player.productivity += 5;
          }
        } else if (overlay.website == 1) {
          menu.message(i18n.overlay.browser.you_cube());
          if (menu.button(i18n.overlay.browser.action.you_cube())) {
            const channels = [
              i18n.overlay.browser.video.v1(),
              i18n.overlay.browser.video.v2(),
              i18n.overlay.browser.video.v3(),
              i18n.overlay.browser.video.v4(),
              i18n.overlay.browser.video.v5(),
              i18n.overlay.browser.video.v6(),
              i18n.overlay.browser.video.v7(),
              i18n.overlay.browser.video.v8(),
              i18n.overlay.browser.video.v9()
            ];
            skip_hours(1);
            message_overlay(i18n.overlay.browser.you_cube_watched({video: random_in_array(channels)}));
            game.player.burnout = Math.max(0, game.player.burnout - 5);
          }
        } else {
          unreachable(overlay.website);
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 9: {
        const top_left = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(top_left.x, top_left.y, menu_width);
        if (menu.button(i18n.overlay.computer.finish_work_for_today())) {
          do {
            skip_hours(1);
            increase_health(4);
          } while (game.hour_of_day != 10);
          close_current_app();
          exit_overlay();
          if (game.day_of_week > work_days) {
            show_overlay({
              type: 5
            });
          } else {
            new_day_message();
          }
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 13: {
        const top_left = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(top_left.x, top_left.y, menu_width);
        const entry = overlay.entry;
        if (entry.type == 0 && entry.task.status == 2) {
          menu.message(i18n.overlay.inbox.review_info());
          if (menu.button(i18n.overlay.inbox.action.review())) {
            show_overlay({
              type: 4,
              task: entry.task
            });
            close_current_app();
          }
        }
        if (entry.type == 1) {
          menu.message(i18n.overlay.inbox.returned_to_dev());
          if (menu.button(i18n.overlay.inbox.action.mark_as_read())) {
            entry.read = true;
            exit_overlay();
          }
        }
        if (entry.type == 2) {
          menu.message(i18n.overlay.inbox.production_bug({num_bugs: entry.task.bugs.toString()}));
          if (menu.button(i18n.overlay.inbox.action.fix_bugs())) {
            increase_burnout_if_working_past_work_time();
            skip_hours(1);
            entry.task.bugs--;
            if (entry.task.bugs == 0) {
              message_overlay(i18n.overlay.inbox.production_bug_fixed());
              entry.read = true;
            }
          }
        }
        if (menu.button(i18n.overlay.inbox.action.do_something_else())) {
          exit_overlay();
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 10: {
        let task_text = function() {
          switch (task.status) {
            case 0: {
              return i18n.overlay.task.status.not_started();
            }
            case 1: {
              if (task.assigned_to.you) {
                return i18n.overlay.task.status.in_dev.you();
              } else {
                return i18n.overlay.task.status.in_dev.teammate({name: task.assigned_to.teammate.name});
              }
            }
            case 2: {
              if (task.assigned_to.you) {
                return i18n.overlay.task.status.in_review.yours();
              } else {
                return i18n.overlay.task.status.in_review.teammate({name: task.assigned_to.teammate.name});
              }
            }
            case 3: {
              return i18n.overlay.task.status.in_testing();
            }
            case 4: {
              return i18n.overlay.task.status.done();
            }
          }
        };
        const top_left = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(top_left.x, top_left.y, menu_width);
        const task = overlay.task;
        menu.message_font(17);
        menu.padding(16);
        menu.message(`"${overlay.task.name}". ${task_text()}`);
        if (task.status == 1 && task.assigned_to.you) {
          if (menu.button(i18n.overlay.task.action.go_to_editor())) {
            open_app(0);
            exit_overlay();
          }
        }
        if (task.status == 2 && !task.assigned_to.you) {
          if (menu.button(i18n.overlay.task.action.go_to_review())) {
            show_overlay({
              type: 4,
              task
            });
            close_current_app();
          }
        }
        if (task.status == 0 && !find_your_first_current_task_in_dev()) {
          if (menu.button(i18n.overlay.task.action.assign_to_you())) {
            assign_task(task, {you: true});
          }
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 11: {
        const teammate = overlay.teammate;
        const task = find_first_assigned_task_in_dev(teammate);
        const top_left = overlay.at;
        const menu_width = 300;
        const menu = auto_menu(top_left.x, top_left.y, menu_width);
        if (is_work_time()) {
          if (task && task.developer_stuck_hours > 0) {
            if (menu.button(i18n.overlay.teammate.action.help({name: teammate.name}))) {
              task.developer_stuck_hours = 0;
              teammate.skill_level += 0.05;
              receive_message_from(teammate, random_in_array([
                i18n.chat.thanks.v1(),
                i18n.chat.thanks.v2(),
                i18n.chat.thanks.v3()
              ]), true);
              skip_hours(1);
              message_overlay(i18n.overlay.teammate.helped({name: teammate.name}));
            }
          } else {
            menu.message(i18n.overlay.teammate.nothing_to_talk_about());
          }
        } else {
          menu.message(i18n.overlay.teammate.cant_talk_after_work({name: teammate.name}));
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 3: {
        let draw_standup_avatar = function(img, name, title) {
          const ctx2 = current_context();
          push_font(18);
          const name_width = ctx2.measureText(name).width;
          pop_font();
          const avatar_side = Math.max(name_width + 30, default_avatar_side * clamp(game.canvas_height / 900, 0.65, 1));
          const x3 = game.canvas_width / 2 - avatar_side / 2;
          const y = menu.y - avatar_side - 70;
          const rect = path_rounded_rect(x3, y, avatar_side, avatar_side + 60, 4);
          ctx2.shadowBlur = 8;
          ctx2.shadowColor = `rgba(119, 119, 119, 1)`;
          ctx2.fillStyle = "#fff";
          ctx2.fill(rect);
          ctx2.shadowBlur = 0;
          push_clip(rect);
          ctx2.drawImage(img.img, x3, y, avatar_side, avatar_side);
          push_font(18);
          const name_x = x3 + avatar_side / 2 - name_width / 2;
          const name_y = y + avatar_side + 16;
          ctx2.fillStyle = "#000";
          ctx2.fillText(name, name_x, name_y);
          pop_font();
          push_font(15);
          const title_width = ctx2.measureText(title).width;
          const title_x = x3 + avatar_side / 2 - title_width / 2;
          const title_y = name_y + 24;
          ctx2.fillStyle = "#777";
          ctx2.fillText(title, title_x, title_y);
          pop_font();
          pop_clip();
        };
        const queue = overlay.queue;
        const teammate = queue[0];
        const default_avatar_side = 256;
        const menu = big_centered_menu(0.45, 750);
        if (teammate) {
          let continue_to_next_teammate = function() {
            const updated_queue = queue.slice(1);
            show_overlay({
              type: 3,
              queue: updated_queue,
              random_verb_divisible: Math.round(Math.random() * 65536)
            });
          }, teammate_message = function() {
            if (current_task) {
              const actions = [
                i18n.overlay.standup.teammate.worked_on.v1(),
                i18n.overlay.standup.teammate.worked_on.v2(),
                i18n.overlay.standup.teammate.worked_on.v3(),
                i18n.overlay.standup.teammate.worked_on.v4(),
                i18n.overlay.standup.teammate.worked_on.v5(),
                i18n.overlay.standup.teammate.worked_on.v6(),
                i18n.overlay.standup.teammate.worked_on.v7()
              ];
              const action = actions[random_verb_divisible % actions.length];
              if (current_task.developer_stuck_hours > 0) {
                return i18n.overlay.standup.teammate.worked_on.stuck({worked_on: action, task: current_task.name});
              } else {
                if (current_task.remaining_work_hours < 3) {
                  return i18n.overlay.standup.teammate.worked_on.finishing_soon({worked_on: action, task: current_task.name});
                } else {
                  return i18n.overlay.standup.teammate.worked_on.base({worked_on: action, task: current_task.name});
                }
              }
            } else {
              const strings = [
                i18n.overlay.standup.teammate.finished_all_tasks.v1(),
                i18n.overlay.standup.teammate.finished_all_tasks.v2(),
                i18n.overlay.standup.teammate.finished_all_tasks.v3(),
                i18n.overlay.standup.teammate.finished_all_tasks.v4(),
                i18n.overlay.standup.teammate.finished_all_tasks.v5()
              ];
              return strings[random_verb_divisible % strings.length];
            }
          };
          const current_task = find_first_assigned_task_in_dev(teammate);
          draw_standup_avatar(teammate.avatar, teammate.name.nominative, teammate.skill_title);
          const random_verb_divisible = overlay.random_verb_divisible;
          menu.message(teammate_message());
          if (current_task) {
            if (menu.button(i18n.overlay.standup.action.continue())) {
              continue_to_next_teammate();
            }
          } else {
            const tasks = free_tasks().slice(0, 5);
            for (const task of tasks) {
              if (menu.button(i18n.overlay.standup.action.suggest_task({task: task.full_name, estimated_time: task.estimated_time.toString()}))) {
                assign_task(task, {
                  you: false,
                  teammate
                });
                continue_to_next_teammate();
              }
            }
            if (tasks.length == 0) {
              if (menu.button(i18n.overlay.standup.action.continue_no_free_tasks())) {
                continue_to_next_teammate();
              }
            }
          }
        } else {
          let your_message = function() {
            if (current_task) {
              return i18n.overlay.standup.you.working_on({task: current_task.name});
            } else {
              return i18n.overlay.standup.you.will_take_next_task();
            }
          }, finish_standup = function() {
            skip_hours(1);
            message_overlay(i18n.overlay.standup.finished());
          };
          const current_task = find_your_first_current_task_in_dev();
          draw_standup_avatar(images.default_avatar, i18n.overlay.standup.you.name(), "TeamLead");
          menu.message(your_message());
          if (current_task) {
            if (menu.button(i18n.overlay.standup.action.continue())) {
              finish_standup();
            }
          } else {
            const tasks = free_tasks().slice(0, 5);
            for (const task of tasks) {
              if (menu.button(i18n.overlay.standup.action.assign_to_yourself({task: task.full_name, estimated_time: task.estimated_time.toString()}))) {
                assign_task(task, {you: true});
                finish_standup();
              }
            }
            if (tasks.length == 0) {
              if (menu.button(i18n.overlay.standup.action.continue_no_free_tasks())) {
                finish_standup();
              }
            }
          }
        }
        menu.finish();
        block_exit();
        break;
      }
      case 8: {
        const menu = big_centered_menu();
        const my_task = find_your_first_current_task_in_dev();
        if (my_task) {
          const work_remaining_message = () => {
            const hours = my_task.remaining_work_hours;
            if (hours == my_task.estimated_time) {
              return i18n.overlay.editor.nothing_done();
            }
            if (hours > 5) {
              return i18n.overlay.editor.lots_of_work();
            } else if (hours > 2) {
              return i18n.overlay.editor.mostly_done();
            } else if (hours == 0) {
              return i18n.overlay.editor.done();
            } else {
              return i18n.overlay.editor.almost_there();
            }
          };
          menu.message(work_remaining_message());
          if (my_task.remaining_work_hours > 0) {
            if (menu.button(i18n.overlay.editor.work_on_task())) {
              increase_burnout_if_working_past_work_time();
              skip_hours(1);
              const work_effort = game.player.productivity / 100;
              my_task.remaining_work_hours = Math.max(0, my_task.remaining_work_hours - work_effort);
              my_task.time_spent++;
              my_task.bugs += Math.floor(Math.random() * 2.5);
              if (my_task.remaining_work_hours > 5) {
                message_overlay_and_then(overlay, i18n.overlay.editor.work_done_1());
              } else if (my_task.remaining_work_hours > 2) {
                message_overlay_and_then(overlay, i18n.overlay.editor.work_done_2());
              } else if (my_task.remaining_work_hours == 0) {
                message_overlay_and_then(overlay, i18n.overlay.editor.work_done_3());
              } else {
                message_overlay_and_then(overlay, i18n.overlay.editor.work_done_4());
              }
            }
          } else {
            if (menu.button(i18n.overlay.editor.action.pass_to_review())) {
              message_overlay(i18n.overlay.editor.passed_to_review());
              pass_task_to_review(my_task);
            }
            if (!my_task.tests_written && menu.button(i18n.overlay.editor.action.write_tests())) {
              const found_bugs = Math.round((0.5 + Math.random() * 0.5) * my_task.bugs);
              my_task.time_spent++;
              my_task.tests_written = true;
              my_task.bugs -= found_bugs;
              increase_burnout_if_working_past_work_time();
              message_overlay_and_then(overlay, i18n.overlay.editor.tests_done());
              skip_hours(1);
            }
            if (!my_task.instructions_for_qa_written && menu.button(i18n.overlay.editor.action.write_qa_instructions())) {
              my_task.instructions_for_qa_written = true;
              my_task.time_spent++;
              increase_burnout_if_working_past_work_time();
              message_overlay_and_then(overlay, i18n.overlay.editor.qa_instructions_done());
              skip_hours(1);
            }
          }
        } else {
          menu.message(i18n.overlay.editor.task_done());
          if (menu.button(i18n.overlay.editor.action.open_wrike_to_take_new_task())) {
            open_app(2);
            exit_overlay();
          }
        }
        if (menu.button(i18n.overlay.editor.action.do_something_else())) {
          exit_overlay();
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 4: {
        const task = overlay.task;
        if (task.assigned_to.you)
          break;
        const menu = big_centered_menu();
        if (task.bugs > 5) {
          menu.message(i18n.overlay.code_review.look_at_code.bad({name: task.assigned_to.teammate.name}));
        } else if (task.bugs > 2) {
          menu.message(i18n.overlay.code_review.look_at_code.not_too_bad({name: task.assigned_to.teammate.name}));
        } else {
          menu.message(i18n.overlay.code_review.look_at_code.ok({name: task.assigned_to.teammate.name}));
        }
        if (menu.button(i18n.overlay.code_review.action.pass_to_qa_without_looking())) {
          pass_task_to_qa(overlay.task, 8);
          message_overlay(i18n.overlay.code_review.passed_to_qa_without_looking());
        }
        if (menu.button(i18n.overlay.code_review.action.look_at_code())) {
          increase_burnout_if_working_past_work_time();
          skip_hours(1);
          if (overlay.task.bugs > 0) {
            const found_bugs = Math.round((0.5 + Math.random() * 0.5) * overlay.task.bugs);
            return_task_from_review_to_development(overlay.task, found_bugs);
            message_overlay(i18n.overlay.code_review.found_bugs());
          } else {
            pass_task_to_qa(overlay.task, 8);
            message_overlay(i18n.overlay.code_review.couldnt_find_bugs());
          }
        }
        if (menu.button(i18n.overlay.code_review.action.do_something_else())) {
          exit_overlay();
        }
        menu.finish();
        allow_exit();
        break;
      }
      case 14: {
        let game_over_message = function(reason) {
          switch (reason) {
            case 0:
              return i18n.overlay.game_over.reason.victory();
            case 1:
              return i18n.overlay.game_over.reason.deadline_failed();
            case 2:
              return i18n.overlay.game_over.reason.fired();
            case 3:
              return i18n.overlay.game_over.reason.bad_health();
            case 4:
              return i18n.overlay.game_over.reason.burnout();
          }
        }, reason_tip = function(reason) {
          switch (reason) {
            case 3:
              return i18n.overlay.game_over.tip.bad_health();
            case 4:
              return i18n.overlay.game_over.tip.burnout();
            case 2:
              return i18n.overlay.game_over.tip.fired();
          }
        };
        const tip = reason_tip(overlay.reason);
        const menu = big_centered_menu(0.2);
        menu.center_text();
        menu.padding(32);
        menu.message(`${game_over_message(overlay.reason)}

${i18n.overlay.game_over.message.header()}
${i18n.overlay.game_over.message.difficulty({difficulty: difficulty_name(game.difficulty)})}
${deadline_stats_message(true)}
${tip ? `
${i18n.overlay.game_over.message.tip({tip})}
` : ""}`);
        if (menu.button(i18n.overlay.game_over.action.restart())) {
          window.location.reload();
        }
        if (menu.button(i18n.overlay.game_over.action.learn_more())) {
          window.open("https://www.wrike.com/wrike-engineering/");
        }
        menu.finish();
        block_exit();
        break;
      }
      default:
        unreachable(overlay);
    }
  }
  function decrease_company_status(penalty) {
    game.player.company_status = Math.max(0, game.player.company_status - penalty);
    if (game.player.company_status == 0) {
      show_overlay({type: 14, reason: 2});
    }
  }
  function skip_hours(how_many) {
    function one_hour() {
      if (is_work_time()) {
        const worked_this_hour = new Set();
        for (const task of all_tasks()) {
          if (task.status == 1 && !task.assigned_to.you) {
            if (worked_this_hour.has(task.assigned_to.teammate)) {
              continue;
            } else {
              worked_this_hour.add(task.assigned_to.teammate);
            }
            if (task.developer_stuck_hours == 0) {
              const chance_to_get_stuck = (1 - task.assigned_to.teammate.skill_level) * 0.1;
              if (Math.random() < chance_to_get_stuck && !task.has_already_stuck_once) {
                const help_messages = [
                  i18n.chat.help.v1({task_name: task.name}),
                  i18n.chat.help.v2({task_name: task.name, sadness: random_up_to(3)}),
                  i18n.chat.help.v3({task_name: task.name}),
                  i18n.chat.help.v4({task_name: task.name}),
                  i18n.chat.help.v5({task_name: task.name})
                ];
                task.developer_stuck_hours = 6;
                task.has_already_stuck_once = true;
                receive_message_from(task.assigned_to.teammate, random_in_array(help_messages));
              } else {
                const change_to_introduce_bugs = (1 - task.assigned_to.teammate.skill_level) * 0.5;
                if (Math.random() < change_to_introduce_bugs) {
                  task.bugs++;
                }
                task.remaining_work_hours--;
                task.time_spent++;
                if (task.remaining_work_hours == 0) {
                  pass_task_to_review(task);
                  game.inbox.push({
                    type: 0,
                    task,
                    read: false,
                    received_at_hour: game.hour_of_day,
                    received_at_day_of_week: game.day_of_week
                  });
                }
              }
            } else {
              task.developer_stuck_hours--;
              task.time_spent++;
              if (task.developer_stuck_hours == 0) {
                const ok_messages = [
                  i18n.chat.figured_out.v1(),
                  i18n.chat.figured_out.v2(),
                  i18n.chat.figured_out.v3(),
                  i18n.chat.figured_out.v4(),
                  i18n.chat.figured_out.v5()
                ];
                receive_message_from(task.assigned_to.teammate, `${random_in_array(ok_messages)}${random_in_array(["", " 👌"])}`, true);
              }
            }
          }
          if (task.status == 3) {
            task.remaining_work_hours--;
            if (task.remaining_work_hours == 0) {
              const bugs_found = Math.floor(Math.random() * task.bugs * 0.7);
              if (!task.assigned_to.you && bugs_found > 1) {
                return_task_from_qa_to_development(task, bugs_found);
              } else {
                deploy_task(task);
              }
            }
          }
          if (task.status == 2 && task.assigned_to.you) {
            task.remaining_work_hours--;
            if (task.remaining_work_hours == 0) {
              if (task.instructions_for_qa_written) {
                pass_task_to_qa(task, 2);
              } else {
                pass_task_to_qa(task, 8);
              }
            }
          }
        }
      }
      for (const task of game.backlog) {
        if (task.status == 4 && task.bugs > 0 && task.can_backfire_on_prod && !task.defects_found_on_prod) {
          const chance_to_find_defects = task.bugs * 0.03;
          if (Math.random() > chance_to_find_defects) {
            task.defects_found_on_prod = true;
            game.inbox.push({
              type: 2,
              task,
              hours_remaining: 72,
              read: false,
              received_at_hour: game.hour_of_day,
              received_at_day_of_week: game.day_of_week
            });
          }
        }
      }
      for (const entry of game.inbox) {
        if (entry.type == 2 && !entry.read) {
          if (entry.hours_remaining > 0) {
            entry.hours_remaining--;
          } else {
            decrease_company_status(3);
          }
        }
      }
      game.hour_of_day++;
      for (const event of game.today_events) {
        if (game.hour_of_day == event.start_hour + event.duration) {
          if (event.type == 3 && !game.player.attended_meetings_today.includes(3)) {
            for (const teammate of game.team) {
              const task = find_first_assigned_task_in_dev(teammate);
              if (!task) {
                const new_random_task = random_in_array(free_tasks().slice(0, 10));
                if (new_random_task) {
                  assign_task(new_random_task, {you: false, teammate});
                }
              }
            }
          }
          const meeting_miss_penalty = {
            [2]: 15,
            [0]: 3,
            [1]: 5,
            [3]: 5,
            [4]: 0,
            [5]: 0
          };
          if (!game.player.attended_meetings_today.includes(event.type)) {
            decrease_company_status(meeting_miss_penalty[event.type]);
          }
        }
      }
      if (game.hour_of_day == 24) {
        game.hour_of_day = 0;
        game.day++;
        if (game.day == game.deadline_day) {
          show_overlay({type: 14, reason: 1});
        }
        if (game.day_of_week == week_days) {
          game.day_of_week = 1;
        } else {
          game.day_of_week++;
        }
        game.player.attended_meetings_today = [];
        refresh_events_for_today();
      }
      game.player.health = Math.max(0, game.player.health - 3);
      if (game.player.health == 0) {
        show_overlay({type: 14, reason: 3});
      }
    }
    for (let hour = 0; hour < how_many; hour++)
      one_hour();
  }
  function find_first_assigned_task_in_dev(teammate) {
    for (const task of game.backlog) {
      if (task.status == 1 && !task.assigned_to.you && task.assigned_to.teammate == teammate) {
        return task;
      }
    }
  }
  function find_your_first_current_task_in_dev() {
    for (const task of game.backlog) {
      if (task.status == 1 && task.assigned_to.you) {
        return task;
      }
    }
  }
  function task_ui(task) {
    return `${task.name} [${Task_Status[task.status]}${task.status == 1 ? ` h: ${task.remaining_work_hours.toFixed(1)}, b: ${task.bugs}` : ""}]`;
  }
  function get_app_notifications(app) {
    switch (app.type) {
      case 3: {
        return game.today_events.some((event) => event.start_hour == game.hour_of_day) ? 1 : 0;
      }
      case 1: {
        return game.team.map((teammate) => teammate.messages.length - teammate.messages_read).reduce((l, r) => l + r, 0);
      }
      case 2: {
        return game.inbox.filter((entry) => !entry.read).length;
      }
      default:
        return 0;
    }
  }
  function draw_app(app) {
    function center_cursor(w, h) {
      set_layout_cursor(game.canvas_width / 2 - w / 2, game.canvas_height / 2 - h / 2);
    }
    function scale_dimension(original, min_ratio) {
      const ratio = clamp(Math.min(game.canvas_width / 1920, game.canvas_height / 900), min_ratio, 1);
      return original * ratio;
    }
    switch (app.type) {
      case 0: {
        const w = scale_dimension(1100, 0.75), h = scale_dimension(600, 0.75);
        push_layout(2);
        center_cursor(w, h);
        draw_window(w, h, i18n.app.editor.name(), () => {
          draw_code_editor(w, h);
        });
        pop_layout();
        break;
      }
      case 1: {
        const w = 900, h = 450;
        push_layout(2);
        center_cursor(w, h);
        draw_window(w, h, i18n.app.chat.name(), () => {
          draw_messenger(app, w, h);
        });
        pop_layout();
        break;
      }
      case 2: {
        const w = 960, h = scale_dimension(620, 0.8);
        push_layout(2);
        center_cursor(w, h);
        draw_window(w, h, i18n.app.wrike.name(), () => {
          draw_wrike(app, w, h);
        });
        pop_layout();
        break;
      }
      case 3: {
        const w = 500, h = 420;
        push_layout(2);
        center_cursor(w, h);
        draw_window(w, h, i18n.app.calendar.name(), () => {
          draw_calendar(w);
        });
        pop_layout();
        break;
      }
      case 4: {
        const w = 900, h = 450;
        push_layout(2);
        center_cursor(w, h);
        draw_window(w, h, i18n.app.browser.name(), () => {
          draw_browser(w, h);
        });
        pop_layout();
        break;
      }
      default:
        unreachable(app);
    }
  }
  function health_label(health) {
    if (health > 80)
      return i18n.status.health.perfect();
    if (health > 60)
      return i18n.status.health.good();
    if (health > 40)
      return i18n.status.health.fine();
    if (health > 20)
      return i18n.status.health.bad();
    if (health > 0)
      return i18n.status.health.terrible();
    return i18n.status.health.zero();
  }
  function company_status_label(status) {
    if (status > 80)
      return i18n.status.company.perfect();
    if (status > 60)
      return i18n.status.company.good();
    if (status > 40)
      return i18n.status.company.fine();
    if (status > 20)
      return i18n.status.company.bad();
    if (status > 0)
      return i18n.status.company.terrible();
    return i18n.status.company.zero();
  }
  function burnout_label(burnout) {
    if (burnout == 100)
      return i18n.status.burnout.zero();
    if (burnout > 80)
      return i18n.status.burnout.terrible();
    if (burnout > 60)
      return i18n.status.burnout.bad();
    if (burnout > 40)
      return i18n.status.burnout.fine();
    if (burnout > 20)
      return i18n.status.burnout.good();
    return i18n.status.burnout.perfect();
  }
  function draw_image_cover(image, x3, y, w, h) {
    const ctx = current_context();
    const image_w = image.img.width;
    const image_h = image.img.height;
    const ratio = Math.min(w / image_w, h / image_h);
    let new_w = image_w * ratio;
    let new_h = image_h * ratio;
    let ar = 1;
    if (new_w < w)
      ar = w / new_w;
    if (Math.abs(ar - 1) < 1e-14 && new_h < h)
      ar = h / new_h;
    new_w *= ar;
    new_h *= ar;
    let cw = image_w / (new_w / w);
    let ch = image_h / (new_h / h);
    const cx = (image_w - cw) * 0.5;
    const cy = (image_h - ch) * 0.5;
    if (cw > image_w)
      cw = image_w;
    if (ch > image_h)
      ch = image_h;
    ctx.drawImage(image.img, cx, cy, cw, ch, x3, y, w, h);
  }
  function do_one_frame() {
    game.canvas_width = window.innerWidth;
    game.canvas_height = window.innerHeight;
    fix_canvas_dpi_scale(game.overlay_ctx);
    fix_canvas_dpi_scale(game.main_ctx);
    fix_canvas_dpi_scale(game.out, false);
    game.font_stack = [];
    game.context_stack = [];
    game.layout_stack = [{
      type: 0,
      cursor: xy(30, 30)
    }];
    game.clip_stack = new WeakMap();
    for (const canvas of [game.overlay_ctx, game.main_ctx]) {
      const rect = new Path2D();
      const size = canvas.getTransform().transformPoint({x: game.canvas_width, y: game.canvas_height});
      rect.rect(0, 0, size.x, size.y);
      canvas.clip(rect);
    }
    const target_scroll_y = game.mouse.last_scroll_event ? game.mouse.last_scroll_event.target_y : 0;
    game.mouse.scroll_y = game.mouse.scroll_y + (target_scroll_y - game.mouse.scroll_y) * 0.3;
    push_context(game.main_ctx);
    push_font(18);
    game.out.clearRect(0, 0, game.canvas_width * game.dpi_scale, game.canvas_height * game.dpi_scale);
    game.main_ctx.clearRect(0, 0, game.canvas_width, game.canvas_height);
    game.overlay_ctx.clearRect(0, 0, game.canvas_width, game.canvas_height);
    const ctx = current_context();
    if (game.hour_of_day < 18 && game.hour_of_day > 6) {
      draw_image_cover(images.background_day, 0, 0, game.canvas_width, game.canvas_height);
    } else {
      draw_image_cover(images.background_night, 0, 0, game.canvas_width, game.canvas_height);
    }
    ctx.textBaseline = "middle";
    game.overlay_ctx.textBaseline = "middle";
    push_context(game.overlay_ctx);
    draw_overlay_screen();
    pop_context();
    ctx.fillStyle = "#fff";
    ctx.shadowBlur = 3;
    ctx.shadowColor = "#000";
    draw_status_line(i18n.status.label.health(), health_label(game.player.health), game.player.health / 100);
    draw_status_line(i18n.status.label.burnout(), burnout_label(game.player.burnout), 1 - game.player.burnout / 100);
    draw_status_line(i18n.status.label.company(), company_status_label(game.player.company_status), game.player.company_status / 100);
    draw_status_line(i18n.status.label.performance(), `${game.player.productivity.toString(10)}%`, 1);
    ctx.shadowBlur = 0;
    push_size(50);
    if (dev_mode) {
      const current = find_your_first_current_task_in_dev();
      if (current) {
        label(task_ui(current));
      }
      if (button("Health = 5")) {
        game.player.health = 5;
      }
      if (button("Burnout = 95")) {
        game.player.burnout = 95;
      }
      if (button("Skip 3 hours")) {
        skip_hours(3);
      }
    }
    draw_top_bar(game.canvas_width);
    push_layout(2);
    const dock_width = 420;
    const dock_height = 100;
    set_layout_cursor(game.canvas_width / 2 - dock_width / 2, game.canvas_height - dock_height + 10);
    draw_dock(dock_width, dock_height);
    pop_layout();
    push_size(500);
    if (game.current_app) {
      draw_app(game.current_app);
    }
    const target_blur = game.overlay.type == 0 ? 0 : 2;
    game.blur = game.blur + (target_blur - game.blur) * 0.1;
    if (game.blur_supported && game.blur > 0.1) {
      game.out.filter = `blur(${game.blur}px)`;
    }
    game.out.drawImage(game.main_ctx.canvas, 0, 0);
    game.out.filter = "none";
    game.out.drawImage(game.overlay_ctx.canvas, 0, 0);
    game.out.canvas.style.cursor = game.any_button_hovered_this_frame ? "pointer" : "default";
    if (game.mouse.last_scroll_event) {
      game.mouse.last_scroll_event.target_y = 0;
      if (game.mouse.scroll_y < 0.01) {
        delete game.mouse.last_scroll_event;
      }
    }
    game.mouse.clicked = false;
    game.any_button_clicked_this_frame = false;
    game.any_button_hovered_this_frame = false;
  }
  function screen_should_be_animating() {
    const showing_overlay = game.overlay.type != 0 && game.time <= game.overlay_shown_at + overlay_show_time();
    return game.time <= game.stop_updating_at || should_draw_day_end_tip() || showing_overlay;
  }
  function start_animation_frame_loop(time) {
    if (game.currentlyRequestedAnimationFrame)
      cancelAnimationFrame(game.currentlyRequestedAnimationFrame);
    if (screen_should_be_animating()) {
      game.currentlyRequestedAnimationFrame = requestAnimationFrame((time2) => {
        start_animation_frame_loop(time2);
      });
      game.frame_time = time - game.time;
      game.time = time;
      do_one_frame();
    } else {
      console.log("STOP ANIMATING");
    }
  }
  var canvas_cache = new WeakMap();
  function fix_canvas_dpi_scale(context, scale = true) {
    function try_update_canvas_sizes(w, h, sw, sh) {
      function set_and_save() {
        canvas_cache.set(context, {w, h, sw, sh});
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = sw;
        canvas.style.height = sh;
        if (scale) {
          context.scale(ratio, ratio);
        }
      }
      const entry = canvas_cache.get(context);
      if (entry == null) {
        set_and_save();
      } else {
        if (entry.w != w || entry.h != h || entry.sw != sw || entry.sh != sh) {
          set_and_save();
        }
      }
    }
    const canvas = context.canvas;
    const width = game.canvas_width;
    const height = game.canvas_height;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = 1;
    const ratio = devicePixelRatio / backingStoreRatio;
    if (devicePixelRatio !== backingStoreRatio) {
      try_update_canvas_sizes(width * ratio, height * ratio, width + "px", height + "px");
    } else {
      try_update_canvas_sizes(width, height, "", "");
    }
    return ratio;
  }
  function random_up_to(x3) {
    return Math.floor(Math.random() * x3);
  }
  function random_in_array(input) {
    return input[random_up_to(input.length)];
  }
  function pick_n_random_skills(skills, how_many) {
    const picked = [];
    for (let index = 0; index < how_many; index++) {
      const skill_index = random_up_to(skills.length);
      picked.push(...skills.splice(skill_index, 1));
    }
    return picked;
  }
  function generate_team() {
    const available_avatars = shuffle([...images.people]);
    const available_skills = all_skills();
    function shuffle(input) {
      for (let index = input.length - 1; index > 0; index--) {
        const random_index = Math.floor(Math.random() * (index + 1));
        const swapped = input[index];
        input[index] = input[random_index];
        input[random_index] = swapped;
      }
      return input;
    }
    function pick_avatar() {
      const avatar = available_avatars.pop();
      if (!avatar)
        throw "Avatar not found";
      return avatar;
    }
    function base(how_many_skills) {
      const titles = [
        "connoisseur",
        "master",
        "jedi",
        "ninja",
        "enthusiast",
        "specialist",
        "expert",
        "guru",
        "wizard",
        "nerd"
      ];
      const skills = pick_n_random_skills(available_skills, how_many_skills);
      const title = skills.map((skill) => {
        const random_title = titles.splice(random_up_to(titles.length), 1)[0];
        return `${skill_name(skill)} ${random_title}`;
      }).join(", ");
      return {
        avatar: pick_avatar(),
        skills,
        skill_title: title,
        messages_read: 0,
        messages: []
      };
    }
    function parse_name(encoded) {
      const parts = encoded.split("|");
      return {
        nominative: parts[0],
        genitive: parts[1],
        dative: parts[2]
      };
    }
    const names = [
      parse_name(i18n.teammate.name_nom_gen_dat.v1()),
      parse_name(i18n.teammate.name_nom_gen_dat.v2()),
      parse_name(i18n.teammate.name_nom_gen_dat.v3()),
      parse_name(i18n.teammate.name_nom_gen_dat.v4()),
      parse_name(i18n.teammate.name_nom_gen_dat.v5())
    ];
    shuffle(names);
    return [{
      ...base(2),
      name: names[0],
      skill_level: 0.7
    }, {
      ...base(2),
      name: names[1],
      skill_level: 0.5
    }, {
      ...base(1),
      name: names[2],
      skill_level: 0.3
    }];
  }
  var words = {
    verbs: [
      "Implement",
      "Research",
      "Add",
      "Support",
      "Fix",
      "Change",
      "Improve",
      "Optimize",
      "Integrate",
      "Enable"
    ],
    adjectives: [
      "adaptive",
      "progressive",
      "directional",
      "borderless",
      "seamless",
      "intuitive",
      "selectable",
      "persistent",
      "contextual",
      "third party",
      "stateful",
      "stateless",
      "sharded"
    ],
    nouns: [
      "navigation",
      "browsing",
      "file attachments",
      "sharing",
      "editing",
      "collaboration",
      "comments",
      "administration",
      "selection",
      "uploads",
      "updates",
      "permalinks",
      "dashboards",
      "stacking",
      "accounts"
    ]
  };
  var knowledge_sharing_topics = new Set();
  function generate_knowledge_sharing_topic() {
    while (true) {
      const name = `${random_in_array(words.adjectives)} ${random_in_array(words.nouns)}`;
      if (!knowledge_sharing_topics.has(name)) {
        knowledge_sharing_topics.add(name);
        return name;
      }
    }
  }
  function generate_backlog(team_size, days_until_deadline, difficulty_multiplier) {
    let remaining_task_hours = Math.ceil(days_until_deadline * team_size * (work_end_hour - work_start_hour) * difficulty_multiplier);
    const generated_names = new Set();
    function generate_task_name() {
      while (true) {
        const name = `${random_in_array(words.verbs)} ${random_in_array(words.adjectives)} ${random_in_array(words.nouns)}`;
        if (!generated_names.has(name)) {
          generated_names.add(name);
          return name;
        }
      }
    }
    function generate_task() {
      const random_hours = 3 + Math.ceil(Math.random() * 7);
      const capped_hours = Math.min(remaining_task_hours, random_hours);
      const how_many_skills_required = Math.round(Math.random() * 3);
      function required_skills_in_brackets(skills) {
        const text = skills.map(skill_name).map((name) => `[${name}]`).join("");
        if (text.length == 0) {
          return "";
        } else {
          return `${text} `;
        }
      }
      const required_skills = pick_n_random_skills(all_skills(), how_many_skills_required);
      const generated_name = generate_task_name();
      return {
        name: generated_name,
        full_name: `${required_skills_in_brackets(required_skills)}${generated_name}`,
        estimated_time: capped_hours,
        status: 0,
        required_skills,
        time_spent: 0
      };
    }
    const tasks = [];
    while (remaining_task_hours > 0) {
      const task = generate_task();
      remaining_task_hours -= task.estimated_time;
      tasks.push(task);
    }
    return tasks;
  }
  function day_of_week_starts(day) {
    switch (day) {
      case 1:
        return i18n.overlay.weekend.day.mon();
      case 2:
        return i18n.overlay.weekend.day.tue();
      case 3:
        return i18n.overlay.weekend.day.wed();
      case 4:
        return i18n.overlay.weekend.day.thu();
      case 5:
        return i18n.overlay.weekend.day.fri();
      case 6:
        return i18n.overlay.weekend.day.sat();
      case 7:
        return i18n.overlay.weekend.day.sun();
    }
  }
  function day_of_week_name(day) {
    switch (day) {
      case 1:
        return i18n.top_bar.day.mon();
      case 2:
        return i18n.top_bar.day.tue();
      case 3:
        return i18n.top_bar.day.wed();
      case 4:
        return i18n.top_bar.day.thu();
      case 5:
        return i18n.top_bar.day.fri();
      case 6:
        return i18n.top_bar.day.sat();
      case 7:
        return i18n.top_bar.day.sun();
    }
  }
  function generate_candidate_name() {
    const first_names = i18n.candidate.first_names().split("|");
    const last_names = i18n.candidate.last_names().split("|");
    return `${random_in_array(first_names)} ${random_in_array(last_names)}`;
  }
  function refresh_events_for_today() {
    game.today_events.length = 0;
    if (game.day_of_week <= work_days) {
      game.today_events.push({
        type: 3,
        duration: 1,
        start_hour: 10
      });
    }
    game.today_events.push({
      type: 5,
      duration: 1,
      start_hour: 13
    });
    if (game.day_of_week == 1) {
      game.today_events.push({
        type: 0,
        start_hour: 14,
        duration: 1,
        teammate: game.team[0]
      });
    }
    if (game.day_of_week == 2) {
      game.today_events.push({
        type: 1,
        duration: 1,
        start_hour: 14
      });
    }
    if (game.day_of_week == 3) {
      game.today_events.push({
        type: 0,
        start_hour: 14,
        duration: 1,
        teammate: game.team[1]
      });
      game.today_events.push({
        type: 2,
        duration: 2,
        start_hour: 16,
        candidate_name: generate_candidate_name()
      });
    }
    if (game.day_of_week == 4) {
      game.today_events.push({
        type: 4,
        start_hour: 16,
        duration: 1,
        topic: generate_knowledge_sharing_topic()
      });
    }
    if (game.day_of_week == 5) {
      game.today_events.push({
        type: 0,
        start_hour: 14,
        duration: 1,
        teammate: game.team[2]
      });
    }
  }
  function is_past_event(event) {
    return game.hour_of_day >= event.start_hour + event.duration;
  }
  function all_apps() {
    return [{
      type: 2,
      dock_hover_time: 0,
      task_list_scroll_y: 0,
      inbox_scroll_y: 0,
      tab: "task_list"
    }, {
      type: 3,
      dock_hover_time: 0
    }, {
      type: 1,
      dock_hover_time: 0
    }, {
      type: 0,
      dock_hover_time: 0
    }, {
      type: 4,
      dock_hover_time: 0
    }];
  }
  function start_game() {
    game.team = generate_team();
    refresh_events_for_today();
  }
  function poke_animation_loop() {
    const already_animating = screen_should_be_animating();
    game.stop_updating_at = game.time + update_after_event_for_ms;
    if (!already_animating) {
      console.log("START ANIMATING");
      start_animation_frame_loop(game.time);
    }
  }
  function create_game() {
    const canvas_element = document.getElementById("canvas");
    if (!canvas_element) {
      throw "Malformed page";
    }
    const backing_canvas = canvas_element;
    const backing_context = backing_canvas.getContext("2d", {alpha: false});
    if (!backing_context) {
      throw "Unable to create draw context";
    }
    const base_width = backing_canvas.width;
    const base_height = backing_canvas.height;
    function create_additional_context(alpha = true) {
      const element = document.createElement("canvas");
      element.width = backing_canvas.width;
      element.height = backing_canvas.height;
      console.log("Created canvas", element.width, element.height);
      const context = element.getContext("2d", {alpha});
      if (!context) {
        throw "Unable to create draw context";
      }
      return context;
    }
    const overlay_ctx = create_additional_context();
    const main_ctx = create_additional_context(false);
    const inferior_browser = navigator.userAgent.toLowerCase().includes("firefox");
    const days_until_deadline = 26;
    game = {
      canvas_width: base_width,
      canvas_height: base_height,
      out: backing_context,
      main_ctx,
      overlay_ctx,
      any_button_clicked_this_frame: false,
      any_button_hovered_this_frame: false,
      mouse: {
        x: 0,
        y: 0,
        button: 0,
        clicked: false,
        scroll_y: 0
      },
      layout_stack: [],
      font_stack: [],
      context_stack: [],
      clip_stack: new WeakMap(),
      time: 0,
      frame_time: 0,
      blur: 0,
      dpi_scale: 1,
      blur_supported: !inferior_browser,
      difficulty: 0,
      day: 0,
      deadline_day: days_until_deadline,
      day_of_week: 1,
      hour_of_day: work_start_hour,
      player: {
        burnout: 0,
        health: 100,
        company_status: 100,
        productivity: 100,
        attended_meetings_today: []
      },
      overlay_shown_at: 0,
      stop_updating_at: 0,
      backlog: [],
      overlay: {
        type: 1
      },
      team: [],
      today_events: [],
      inbox: [],
      apps: all_apps()
    };
    game.dpi_scale = fix_canvas_dpi_scale(backing_context, false);
    const cursor_position_on_canvas = (event) => {
      const transform = backing_context.getTransform().inverse();
      const rect = backing_canvas.getBoundingClientRect();
      const scale_x = backing_canvas.width / rect.width;
      const scale_y = backing_canvas.height / rect.height;
      return transform.transformPoint({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    };
    backing_canvas.addEventListener("mousedown", (event) => {
      const real_position = cursor_position_on_canvas(event);
      const mouse = game.mouse;
      mouse.clicked = true;
      mouse.x = real_position.x;
      mouse.y = real_position.y;
      mouse.button = event.button;
      poke_animation_loop();
    });
    backing_canvas.addEventListener("mousemove", (event) => {
      const real_position = cursor_position_on_canvas(event);
      const mouse = game.mouse;
      mouse.x = real_position.x;
      mouse.y = real_position.y;
      poke_animation_loop();
    });
    backing_canvas.addEventListener("wheel", (event) => {
      const real_position = cursor_position_on_canvas(event);
      const mouse = game.mouse;
      mouse.last_scroll_event = {
        target_y: event.deltaY,
        x: real_position.x,
        y: real_position.y
      };
      poke_animation_loop();
    });
    backing_canvas.addEventListener("contextmenu", (event) => event.preventDefault());
    start_animation_frame_loop(0);
  }
  create_game();
})();
//# sourceMappingURL=bundle.js.map
