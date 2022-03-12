import Content from "./Content"
import Header from "./Header"
import SettingsPage from "./SettingsPage"


interface LayoutProps {
    title: string
    subTitle: string
    children?: any
}

export default function Layout (props: LayoutProps) {
    return (
        <>
            <SettingsPage />
            <Header title={props.title} subTitle={props.subTitle}/>
            <Content>
                {props.children}
            </Content>
        </>
    )
}