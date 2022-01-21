import { useRouter } from 'next/router'

export default function User() {
    const router = useRouter()
    console.log(router)
    return(
        <>
            <div>User</div>
        </>
    )
}