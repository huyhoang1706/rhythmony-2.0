package infrastructure

import (
	"rhythmony/core/internal/infrastructure/db"
	"rhythmony/core/internal/infrastructure/store"

	"go.uber.org/fx"
)

var Modules = fx.Options(
	fx.Provide(db.NewCockRoachConnection),
	fx.Provide(store.NewRepository),
	fx.Provide(store.NewArtistRepository),
	fx.Provide(store.NewGenreRepository),
)
