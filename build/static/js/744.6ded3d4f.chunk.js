"use strict";(self.webpackChunktttt=self.webpackChunktttt||[]).push([[744],{5432:(e,t,s)=>{s.d(t,{ConfigCtrl:()=>u,ExplorerCtrl:()=>j,HB:()=>i,IP:()=>T,OptionsCtrl:()=>p,Os:()=>c,ThemeCtrl:()=>V,ToastCtrl:()=>B,Y3:()=>n});var o=s(8848);const a=(0,o.m2)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),n={state:a,subscribe:e=>(0,o.Cc)(a,(()=>e(a))),push(e,t){e!==a.view&&(a.view=e,t&&(a.data=t),a.history.push(e))},reset(e){a.view=e,a.history=[e]},replace(e){a.history.length>1&&(a.history[a.history.length-1]=e,a.view=e)},goBack(){if(a.history.length>1){a.history.pop();const[e]=a.history.slice(-1);a.view=e}},setData(e){a.data=e}},i={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>i.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return i.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(i.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o="".concat(o,"://")),o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const a=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(a)},formatUniversalUrl(e,t,s){if(!i.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const a=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(a)},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(i.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(i.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=n.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},l=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),r=(0,o.m2)({enabled:l,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:r,subscribe:e=>(0,o.Cc)(r.events,(()=>e((0,o._q)(r.events[r.events.length-1])))),initialize(){r.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(r.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){r.connectedWalletId=e},click(e){if(r.enabled){const t={type:"CLICK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},track(e){if(r.enabled){const t={type:"TRACK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},view(e){if(r.enabled){const t={type:"VIEW",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}}},d=(0,o.m2)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),p={state:d,subscribe:e=>(0,o.Cc)(d,(()=>e(d))),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},m=(0,o.m2)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),u={state:m,subscribe:e=>(0,o.Cc)(m,(()=>e(m))),setConfig(e){var t,s;c.initialize(),p.setChains(e.chains),p.setIsAuth(Boolean(e.enableAuthMode)),p.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),p.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),i.setModalVersionInStorage(),Object.assign(m,e)}};var g=Object.defineProperty,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,b=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const I="https://explorer-api.walletconnect.com",y="wcm",f="js-2.6.2";async function w(e,t){const s=((e,t)=>{for(var s in t||(t={}))v.call(t,s)&&b(e,s,t[s]);if(h)for(var s of h(t))C.call(t,s)&&b(e,s,t[s]);return e})({sdkType:y,sdkVersion:f},t),o=new URL(e,I);return o.searchParams.append("projectId",u.state.projectId),Object.entries(s).forEach((e=>{let[t,s]=e;s&&o.searchParams.append(t,String(s))})),(await fetch(o)).json()}const W={getDesktopListings:async e=>w("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>w("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>w("/w3m/v1/getInjectedListings",e),getAllListings:async e=>w("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>"".concat(I,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(u.state.projectId,"&sdkType=").concat(y,"&sdkVersion=").concat(f),getAssetImageUrl:e=>"".concat(I,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(u.state.projectId,"&sdkType=").concat(y,"&sdkVersion=").concat(f)};var L=Object.defineProperty,O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const M=i.isMobile(),k=(0,o.m2)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),j={state:k,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=u.state;if("NONE"===e||"ALL"===t&&!e)return k.recomendedWallets;if(i.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await W.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),k.recomendedWallets=o}else{const{chains:e,isAuth:s}=p.state,o=null===e||void 0===e?void 0:e.join(","),a=i.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:i.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:l}=M?await W.getMobileListings(n):await W.getDesktopListings(n);k.recomendedWallets=Object.values(l)}return k.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))E.call(t,s)&&U(e,s,t[s]);if(O)for(var s of O(t))A.call(t,s)&&U(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=u.state,{recomendedWallets:a}=k;if("ALL"===o)return k.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):i.isArray(s)&&(t.excludedIds=s.join(",")),i.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),p.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:l}=e,{listings:r,total:c}=M?await W.getMobileListings(t):await W.getDesktopListings(t),d=Object.values(r),m=l?"search":"wallets";return k[m]={listings:[...k[m].listings,...d],total:c,page:null!==n&&void 0!==n?n:1},{listings:d,total:c}},getWalletImageUrl:e=>W.getWalletImageUrl(e),getAssetImageUrl:e=>W.getAssetImageUrl(e),resetSearch(){k.search={listings:[],total:0,page:1}}},D=(0,o.m2)({open:!1}),T={state:D,subscribe:e=>(0,o.Cc)(D,(()=>e(D))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=p.state;if(i.removeWalletConnectDeepLink(),p.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),p.setChains(null===e||void 0===e?void 0:e.chains),n.reset("ConnectWallet"),s&&o)D.open=!0,t();else{const e=setInterval((()=>{const s=p.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),D.open=!0,t())}),200)}})),close(){D.open=!1}};var N=Object.defineProperty,S=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,x=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const R=(0,o.m2)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),V={state:R,subscribe:e=>(0,o.Cc)(R,(()=>e(R))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(R.themeMode=t),s&&(R.themeVariables=((e,t)=>{for(var s in t||(t={}))P.call(t,s)&&x(e,s,t[s]);if(S)for(var s of S(t))_.call(t,s)&&x(e,s,t[s]);return e})({},s))}},H=(0,o.m2)({open:!1,message:"",variant:"success"}),B={state:H,subscribe:e=>(0,o.Cc)(H,(()=>e(H))),openToast(e,t){H.open=!0,H.message=e,H.variant=t},closeToast(){H.open=!1}}},7744:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(5432);class a{constructor(e){this.openModal=o.IP.open,this.closeModal=o.IP.close,this.subscribeModal=o.IP.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(868).then(s.bind(s,6868));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=744.6ded3d4f.chunk.js.map