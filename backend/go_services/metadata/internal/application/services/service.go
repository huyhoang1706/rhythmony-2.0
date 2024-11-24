package services

import "go.uber.org/fx"

var Modules = fx.Options(
	fx.Provide(NewArtistService),
	fx.Provide(NewGenreService),
	fx.Provide(NewTrackService),
)
