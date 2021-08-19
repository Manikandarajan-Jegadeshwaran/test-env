import logo from './logo.svg';
import './App.css';

function App() {
  const fallbackUrl = 'https://itunes.apple.com/sg/app/dbs-digibank-sg/id1068403826?mt=8';

  const androidUrl = 'intent://com.dbs.sg.dbsmbanking/promoid/?serviceID=BANCA_WEBVIEW_PRODUCT&source=MB&BANCA_WEBVIEW_PRODUCT_CODE=mpd#Intent;scheme=dbsmbanking;package=com.dbs.sg.dbsmbanking;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.dbs.sg.dbsmbanking&hl=en;end'

  const isIOSDevice = () => navigator.userAgent.indexOf('iPhone') !== -1

  const openApp = (url) => {
    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') === -1 &&
      navigator.userAgent.indexOf('FxiOS') === -1;


    if (isIOSDevice()) {
      alert('ios')
      if (isSafari) {
        window.open(url, '_system')
        window.open(fallbackUrl, '_system')
      } else {
        window.setTimeout(() => {
          window.location.href = fallbackUrl
        }, 3000)
        window.location.href = url
      }
    } else {
      window.location.href = androidUrl
    }






    // window.setTimeout(() => {
    //   window.location.href = fallbackUrl
    // }, 4000)

    // let body = document.getElementsByTagName('body')
    // console.log(body)

    // let iframe = document.createElement('iframe')
    // iframe.id = 'deeplinkFrame'
    // iframe.src = url
    // // iframe.style.display = 'none'
    // document.body.innerHTML += `<iframe style="display:none;" src=${'twitter://'}/>`
    // document.body.innerHTML += `<iframe style="display:none;" src=${fallbackUrl}/>`









    // window.location.href = url


    // var now = new Date().valueOf();
    // setTimeout(function () {
    //   console.log('_v', new Date().valueOf() - now)
    //   //if (new Date().valueOf() - now > 100) return;
    //   window.location = fallbackUrl
    // }, 2000);
    // window.location = url
  }




  const handleInstalled = () => {
    const url = 'DBSDigibankSG://?serviceID=BANCA_WEBVIEW_PRODUCT';
    openApp(url)
  }

  const handleNotInstalled = () => {
    const url = 'DBSiWealthSG://?serviceID=BANCA_WEBVIEW_PRODUCT';
    openApp(url)
  }


  return <div>
    <button style={{ padding: 10 }} onClick={handleInstalled}>Installed</button><br></br>
    <br></br>
    <button style={{ padding: 10 }} onClick={handleNotInstalled}>Not installed</button><br></br>
  </div>

  return (
    <div class="jar">
      <div class="skull" />
      <div class="face">
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
        <div class="nose" />
        <div class="tooth">
          <div class="teeth"></div>
          <div class="teeth"></div>
          <div class="teeth"></div>
        </div>
        <div />
      </div>
    </div>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>

  //   </div>
  // );
}

export default App;
