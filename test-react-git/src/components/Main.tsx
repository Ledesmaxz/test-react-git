
import '../styles/Main.css'
import Products from './Products'

export default function Main() {
  

  return (
    <main className='main'>
      <aside className='main__aside'>categories</aside>
      <section className='main__products'>
        <Products></Products>
      </section>
    </main>
  )
}
