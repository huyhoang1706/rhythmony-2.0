-- +goose Up
-- +goose StatementBegin
ALTER TABLE tracks ADD COLUMN is_featured BOOLEAN;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE tracks DROP COLUMN is_featured;
-- +goose StatementEnd
