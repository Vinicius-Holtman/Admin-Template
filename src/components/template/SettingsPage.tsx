import { HomeIcon, AdjustmentsIcon, BellIcon, LogoutIcon } from '../icons/index'
import MenuItem from "./MenuItem";
import { AwsSvg } from "../icons"

export default function SettingsPage() {
    return (
        <aside className='flex flex-col'>
            <div className="flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800">
                { AwsSvg }
            </div>
            <ul className='flex-grow'>
                <MenuItem url="/" text="Home" icon={HomeIcon}/>
                <MenuItem url="/adjustments" text="Adjustments" icon={AdjustmentsIcon}/>
                <MenuItem url="/newsbells" text="New Bell" icon={BellIcon}/>
            </ul>
            <ul>
                <MenuItem text="Logout" icon={LogoutIcon}
                onLinkClick={() => console.log('logout')}
                className={`text-red-600 hover:bg-red-400 hover:text-white`}/>
            </ul>
        </aside>
    )
}