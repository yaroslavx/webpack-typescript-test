import './styles.css'
import img from './logo.png'
import ClickCounter from './ClickCounter'

export const App = () => {
    return <>
        <h1>Typescript Webpack React – {process.env.NODE_ENV} – {process.env.name}</h1>
        <img src={img} alt="logo" width='500' />
        <ClickCounter />
    </>
}