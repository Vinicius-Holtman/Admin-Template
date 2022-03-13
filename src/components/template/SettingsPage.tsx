import MenuItem from "./MenuItem";
import { HomeIcon, AdjustmentsIcon, BellIcon } from '../icons/index'

export default function SettingsPage() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" text="Home" icon={HomeIcon}/>
                <MenuItem url="/adjustments" text="Adjustments" icon={AdjustmentsIcon}/>
                <MenuItem url="/newsbells" text="New Bell" icon={BellIcon}/>
            </ul>
        </aside>
    )
}