import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
    const { data: session } = useSession()

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color='var(--orange-1)' />
            {session.user.name}
            <FiX color='var(--orange-1)' className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color='var(--orange-1)' />
            Faça login com Github
        </button>
    )
}