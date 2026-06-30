import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const bootLines = [
  { text: '[  OK  ] Initializing kernel modules...', delay: 200 },
  { text: '[  OK  ] Mounting filesystems...', delay: 400 },
  { text: '[  OK  ] Starting networking service...', delay: 600 },
  { text: '[  OK  ] Loading security profiles...', delay: 800 },
  { text: '[  OK  ] Starting display manager...', delay: 1000 },
  { text: '', delay: 1100 },
  { text: 'Welcome to godwin-portfolio v1.0', delay: 1200 },
  { text: 'System ready. Press ENTER to continue.', delay: 1400 },
]

export default function Hero() {
  const [booted, setBooted] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const [showPrompt, setShowPrompt] = useState(false)
  const [typed, setTyped] = useState('')
  const [commandSent, setCommandSent] = useState(false)

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => {
          if (v >= bootLines.length) return v
          return v + 1
        })
      }, bootLines[visibleLines]?.delay || 300)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setBooted(true)
        setShowPrompt(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  useEffect(() => {
    if (!showPrompt || commandSent) return
    const fullCmd = './intro --display'
    if (typed.length < fullCmd.length) {
      const timer = setTimeout(() => {
        setTyped(fullCmd.slice(0, typed.length + 1))
      }, 40)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setCommandSent(true), 400)
      return () => clearTimeout(timer)
    }
  }, [showPrompt, typed, commandSent])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowPrompt(true)
    }
  }

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>
      <div className="container">
        {!booted ? (
          <div>
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="boot-line" style={{ animationDelay: `${i * 0.05}s`, fontSize: 13, lineHeight: 1.8 }}>
                {line.text}
              </div>
            ))}
            <div className="boot-line" style={{ animationDelay: `${bootLines.length * 0.05}s`, fontSize: 13, marginTop: 8 }}>
              <span className="blink" style={{ color: 'var(--text-dim)' }}>_</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="prompt-line" style={{ marginBottom: 16 }}>
              <span className="prompt-user">guest</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">godwin-portfolio</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span style={{ color: 'var(--cyan)' }}>{typed}</span>
              {!commandSent && <span className="blink" style={{ color: 'var(--text)' }}>|</span>}
            </div>

            {commandSent && (
              <div style={{ animation: 'bootFadeIn 0.3s ease forwards' }}>
                <pre className="ascii-art" style={{ margin: '16px 0' }}>
{` ██████╗  ██████╗ ██████╗ ██╗    ██╗██╗███╗   ██╗
██╔════╝ ██╔═══██╗██╔══██╗██║    ██║██║████╗  ██║
██║  ███╗██║   ██║██║  ██║██║ █╗ ██║██║██╔██╗ ██║
██║   ██║██║   ██║██║  ██║██║███╗██║██║██║╚██╗██║
╚██████╔╝╚██████╔╝██████╔╝╚███╔███╔╝██║██║ ╚████║
 ╚═════╝  ╚═════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝`}
                </pre>

                <div className="cmd-output" style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 8 }}>
                    # {personalInfo.tagline}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>
                    location: {personalInfo.location}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>
                    email: {personalInfo.email}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>
                    phone: {personalInfo.phone}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
                    title: {personalInfo.title}
                  </div>

                  <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.7, maxWidth: 700 }}>
                    {personalInfo.tagline}
                  </div>
                </div>

                <div className="prompt-line" style={{ marginTop: 24 }}>
                  <span className="prompt-user">guest</span>
                  <span className="prompt-at">@</span>
                  <span className="prompt-host">godwin-portfolio</span>
                  <span className="prompt-sep">:</span>
                  <span className="prompt-path">~</span>
                  <span className="prompt-symbol">$</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: 13 }}>Available: ./nav --links</span>
                  <span className="blink" style={{ color: 'var(--text)' }}>|</span>
                </div>
              </div>
            )}

            {!showPrompt && (
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                Press <span style={{ color: 'var(--accent)', border: '1px solid var(--text-dim)', padding: '2px 6px' }}>ENTER</span> to continue...
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
