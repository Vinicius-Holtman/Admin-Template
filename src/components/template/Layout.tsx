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
        <div className="dark flex h-screen w-screen">
            <SettingsPage />
            <div className="flex flex-col w-full p-7 dark: bg-gray-800 bg-gray-300">
                <Header title={props.title} subTitle={props.subTitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}