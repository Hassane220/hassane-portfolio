import { CONTENT } from '../content.js'

export default function Footer({ t }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="c">© {year} Soumahoro Hassane — {t.footer.built}</span>
        <div className="fl">
          <a href={'mailto:' + CONTENT.social.email}>Email</a>
        </div>
      </div>
    </footer>
  )
}
