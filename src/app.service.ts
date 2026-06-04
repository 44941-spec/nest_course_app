import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Minecraft';
  }
  getName(): string {
    return'Karn Raman'
  }
  getLove(): string {
    return'Fan and air conditioner'
  }
  getMesmerizer(): string {
    return 'Dont reflect on feelings you dont need Do you pretend you cant see all the certainties and even your own heartbeat? Thats the way the safe zone will decrease Your wounds are sold by each piece Your cries are weakened completely You know, I really gotta give a little tip, okay? For the greatest escape While traps await, you are always gonna find another method to be savеd every day Now that its plain, you are nеver gonna be sane living in this world all the same Maybe its better if you play really dumb And you say youre giving in and fall away If flowers in a bouquet, dressed in pretty lies Can steal a heart in some way, are they real inside? Where every little thing stains I will save an invite til youre tied up by my side Bye, later Youre tailor-made for this day and age Cause youre powerless and look like prey You are fooled by the way that this act behaves And your beating heart has gone insane, its always resonating Now, not a trace of your lives remain And your fortitude is growing faint While you dodge and evade what is in your face You are busy living all the same Somebody, help me right away "Falling asleep, youre falling asleep" And maybe you seemed more dizzy to me All you can be is muddled, indeed But what do I see? Every trick up your sleeve? Swinging a dime in front of your eyes Until you will find youre frozen in time "This is alright" But even your mind is lured alive, right into shutdown "Falling asleep, youre falling asleep" And maybe you seemed more dizzy to me All you can be is muddled, indeed But what do I see? Every trick up your sleeve? Swinging a dime in front of your eyes Until you will find youre frozen in time, ha Through all the ways you survive this phase It is unrewarding every day You are caught in the chains of a bot-like game Looping on and on, its all the same, its always never-changing You cant embrace even luck or faith So its meaningless again, in vain If you cant get a trace, give it all away Having only what you call remains will be your fate, awaiting Youre tailor-made for this day and age Cause youre powerless and look like prey You are fooled by the way that this act behaves And your beating heart has gone insane, its always resonating Joy, all the same, doesnt have much weight And that charismatic charm is fake If you stare hard and gape at the truth displayed You will end up going blind someday So go and practice some restraint'
  }
  getJson(): object {
    return {
      name: 'Mahino',
      surname: 'Douka',
      age: 30e24
    }
  }
}
