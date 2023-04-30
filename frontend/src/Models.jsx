import PropTypes from "prop-types";

export const UserModel = PropTypes.shape({
	username: PropTypes.string.isRequired,
	nickname: PropTypes.string.isRequired,
	aliasname: PropTypes.string.isRequired,
	profileImage: PropTypes.string.isRequired,
});

export const TokenModel = PropTypes.shape({
	id: PropTypes.string.isRequired,
	owner: UserModel,
});

export const LocationModel = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
});

export const OrderModel = PropTypes.shape({
	id: PropTypes.number.isRequired,
	rider: UserModel,
	message: PropTypes.string.isRequired,
	location: LocationModel,
	maxOrder: PropTypes.number.isRequired,
	isComplete: PropTypes.bool.isRequired,
});

export const OrderRecipientModel = PropTypes.shape({
	id: PropTypes.number.isRequired,
	recipient: UserModel,
	order: OrderModel,
	message: PropTypes.string.isRequired,
});