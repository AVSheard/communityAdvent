exports.up = function (knex) {
	return knex.schema.createTable("users", (usersTable) => {
		userTable.string("username").primary().unique();
		userTable.string("name").notNullable();
		userTable.string("avatar_url");
		userTable.string("email").notNullable();
		userTable.string("password").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
