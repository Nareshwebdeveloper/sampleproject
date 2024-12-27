import { useEffect, useState } from "react"

export function ProgressBar() {
    const [progress, setprogress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setprogress(preProgress => {

                if (preProgress === 100) {
                    clearInterval(interval)
                    return 100 && alert("download completed")

                } else {
                    return preProgress + 1
                }
            })
        }, 50)
    }, [])
    return (
        <div>
            <select>
                <option>India</option>
                <option>UK</option>
                <option>PAK</option>
                <option>AUS</option>
                <option>RASIA</option>
            </select>
        </div>
    )
}