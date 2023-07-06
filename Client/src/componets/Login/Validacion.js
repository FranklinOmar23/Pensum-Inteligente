export const handleSubmit = (event, email, password, setShowError) => {
    event.preventDefault();
    if (email === '' || password === '') {
      setShowError(true);
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      setShowError(false);
    }
  };