import { supabase } from '@/supabase/client'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SignOutButton = () => {
  const router = useRouter();
    
  async function signOut() {  
  const { error } = await supabase.auth.signOut()
    if (error) console.log(error)
    router.push('/')
    window.location.reload();
  }

  return (
    <Button variant="expandIcon" Icon={LogOut} iconPlacement="right" size='sm' className='w-full'  onClick={signOut}>
      Signout
    </Button>
  )
}

export default SignOutButton
