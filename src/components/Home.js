import React from 'react'
import Overview from './Overview/Overview'
import Intro from "./Intro/Intro"
 import Speakers from "./Speakers/Speakers.js"
import Programs from './Programs/Programs'
import Quest from "./Quest/Quest"

import Register from "./Register/Register.js"
import Venue from './Venue/Venue'
import Sponsors from './Sponsors/Sponsors'
import Contact from "./Contact/Contact.js"
export default function Home() {

  return (
<div>

<Intro  />
<Overview/>
<Speakers  />
<Programs  />
<Register  />
<Quest />
<Venue />
<Sponsors/>
<Contact  />
</div>
  )
}
