import AppLogo from '../assets/logo.png'
import GitHubLogo from '../assets/github.png'
function Header() {
  return (
    <>
        <div className="body-header">
            <img src={AppLogo} alt="app-logo" className="left-image" />
            <a href="https://github.com/rajatuiwebdev/pick-a-color"><img src={GitHubLogo} alt="github-logo" className="right-image" /></a>
        </div>
    </>
  )
}

export default Header