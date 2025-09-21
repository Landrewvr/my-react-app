import type {UserType} from '../../models/user';

type UserProps = {
    user: UserType
}

function User({ user: { name, email, isOnline = false } }: UserProps) {
    return (
        <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
            <h3>{name}:</h3>
            <p>Email: {email}</p>
            <p>Status: {(isOnline) ? '🟢 Online' : '⚪ Offline' }</p>
        </div>
    );
}

export default User;
