import '../styles/Main.css'

import { Categories } from './Categories';

export default function Main() {
  return (
    <main className='main'>
      <aside className='main__aside'>
        <Categories />
      </aside>
      <section className='main__products'>
        products
      </section>
    </main>
  )
}
