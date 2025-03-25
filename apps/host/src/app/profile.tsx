import { useContextProfile, useProfile, useStoreProfile, } from '@custom-mfe/store';

export default function UserProfile() {
    const { data } = useProfile();
    const { get, set } = useStoreProfile();
    const { profile, setProfile } = useContextProfile();

    const storeProfile = get();

    return (
        <><div>사용자 프로필: {JSON.stringify(data)}</div>
            <div>스토어 사용자 프로필: {JSON.stringify(storeProfile)}</div>
            <div>컨텍스트 사용자 프로필: {JSON.stringify(profile)}</div>
            <button type="button" onClick={() => {
                set({
                    id: crypto.randomUUID(),
                    name: '스토어 사용자'
                })
                setProfile({
                    id: crypto.randomUUID(),
                    name: '컨텍스트 사용자'
                })
            }}>프로필 변경</button>
        </>)
}