import PropTypes from 'prop-types';
import EmployeeRegister from './EmployeeRegister';
import ClientRegister from './ClientRegister';

const RegisterForm = ({
 checkBoxValue, client, setClient, employee, enableButton
}) => {
  if (checkBoxValue === 'employee') {
    return <EmployeeRegister employee />;
  }
  return <ClientRegister client setClient={(c) => setClient(c)} enabledButton />;
};

RegisterForm.propTypes = {
  checkBoxValue: PropTypes.string
};

export default RegisterForm;
