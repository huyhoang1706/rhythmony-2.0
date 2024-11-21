package infrastructure

import (
	"rhythmony.com/metadata/internal/infrastructure/db"
	"rhythmony.com/metadata/internal/infrastructure/store"

	"go.uber.org/fx"
)

var Modules = fx.Options(
	fx.Provide(db.NewCockRoachConnection),
	fx.Provide(store.NewRepository),
	fx.Provide(store.NewArtistRepository),
	fx.Provide(store.NewGenreRepository),
)
