// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.27.2
// source: artist.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	ArtistAPI_GetArtistById_FullMethodName        = "/rhythmony.metadata.ArtistAPI/GetArtistById"
	ArtistAPI_ListSeveralArtists_FullMethodName   = "/rhythmony.metadata.ArtistAPI/ListSeveralArtists"
	ArtistAPI_CreateArtist_FullMethodName         = "/rhythmony.metadata.ArtistAPI/CreateArtist"
	ArtistAPI_UpdateArtist_FullMethodName         = "/rhythmony.metadata.ArtistAPI/UpdateArtist"
	ArtistAPI_DeleteArtist_FullMethodName         = "/rhythmony.metadata.ArtistAPI/DeleteArtist"
	ArtistAPI_ListArtistsByAlbumId_FullMethodName = "/rhythmony.metadata.ArtistAPI/ListArtistsByAlbumId"
	ArtistAPI_ListArtistsByTrackId_FullMethodName = "/rhythmony.metadata.ArtistAPI/ListArtistsByTrackId"
)

// ArtistAPIClient is the client API for ArtistAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ArtistAPIClient interface {
	GetArtistById(ctx context.Context, in *GetArtistRequest, opts ...grpc.CallOption) (*GetArtistResponse, error)
	ListSeveralArtists(ctx context.Context, in *ListSeveralArtistsRequest, opts ...grpc.CallOption) (*ListSeveralArtistsResp, error)
	CreateArtist(ctx context.Context, in *CreateArtistRequest, opts ...grpc.CallOption) (*CreateArtistResponse, error)
	UpdateArtist(ctx context.Context, in *UpdateArtistRequest, opts ...grpc.CallOption) (*UpdateArtistResponse, error)
	DeleteArtist(ctx context.Context, in *DeleteArtistRequest, opts ...grpc.CallOption) (*DeleteArtistResponse, error)
	ListArtistsByAlbumId(ctx context.Context, in *ListArtistsByAlbumIdRequest, opts ...grpc.CallOption) (*ListArtistsByAlbumIdResponse, error)
	ListArtistsByTrackId(ctx context.Context, in *ListArtistsByTrackIdRequest, opts ...grpc.CallOption) (*ListArtistsByTrackIdResponse, error)
}

type artistAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewArtistAPIClient(cc grpc.ClientConnInterface) ArtistAPIClient {
	return &artistAPIClient{cc}
}

func (c *artistAPIClient) GetArtistById(ctx context.Context, in *GetArtistRequest, opts ...grpc.CallOption) (*GetArtistResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetArtistResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_GetArtistById_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) ListSeveralArtists(ctx context.Context, in *ListSeveralArtistsRequest, opts ...grpc.CallOption) (*ListSeveralArtistsResp, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListSeveralArtistsResp)
	err := c.cc.Invoke(ctx, ArtistAPI_ListSeveralArtists_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) CreateArtist(ctx context.Context, in *CreateArtistRequest, opts ...grpc.CallOption) (*CreateArtistResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateArtistResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_CreateArtist_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) UpdateArtist(ctx context.Context, in *UpdateArtistRequest, opts ...grpc.CallOption) (*UpdateArtistResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdateArtistResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_UpdateArtist_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) DeleteArtist(ctx context.Context, in *DeleteArtistRequest, opts ...grpc.CallOption) (*DeleteArtistResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DeleteArtistResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_DeleteArtist_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) ListArtistsByAlbumId(ctx context.Context, in *ListArtistsByAlbumIdRequest, opts ...grpc.CallOption) (*ListArtistsByAlbumIdResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListArtistsByAlbumIdResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_ListArtistsByAlbumId_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistAPIClient) ListArtistsByTrackId(ctx context.Context, in *ListArtistsByTrackIdRequest, opts ...grpc.CallOption) (*ListArtistsByTrackIdResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListArtistsByTrackIdResponse)
	err := c.cc.Invoke(ctx, ArtistAPI_ListArtistsByTrackId_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArtistAPIServer is the server API for ArtistAPI service.
// All implementations must embed UnimplementedArtistAPIServer
// for forward compatibility.
type ArtistAPIServer interface {
	GetArtistById(context.Context, *GetArtistRequest) (*GetArtistResponse, error)
	ListSeveralArtists(context.Context, *ListSeveralArtistsRequest) (*ListSeveralArtistsResp, error)
	CreateArtist(context.Context, *CreateArtistRequest) (*CreateArtistResponse, error)
	UpdateArtist(context.Context, *UpdateArtistRequest) (*UpdateArtistResponse, error)
	DeleteArtist(context.Context, *DeleteArtistRequest) (*DeleteArtistResponse, error)
	ListArtistsByAlbumId(context.Context, *ListArtistsByAlbumIdRequest) (*ListArtistsByAlbumIdResponse, error)
	ListArtistsByTrackId(context.Context, *ListArtistsByTrackIdRequest) (*ListArtistsByTrackIdResponse, error)
	mustEmbedUnimplementedArtistAPIServer()
}

// UnimplementedArtistAPIServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedArtistAPIServer struct{}

func (UnimplementedArtistAPIServer) GetArtistById(context.Context, *GetArtistRequest) (*GetArtistResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArtistById not implemented")
}
func (UnimplementedArtistAPIServer) ListSeveralArtists(context.Context, *ListSeveralArtistsRequest) (*ListSeveralArtistsResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSeveralArtists not implemented")
}
func (UnimplementedArtistAPIServer) CreateArtist(context.Context, *CreateArtistRequest) (*CreateArtistResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateArtist not implemented")
}
func (UnimplementedArtistAPIServer) UpdateArtist(context.Context, *UpdateArtistRequest) (*UpdateArtistResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateArtist not implemented")
}
func (UnimplementedArtistAPIServer) DeleteArtist(context.Context, *DeleteArtistRequest) (*DeleteArtistResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteArtist not implemented")
}
func (UnimplementedArtistAPIServer) ListArtistsByAlbumId(context.Context, *ListArtistsByAlbumIdRequest) (*ListArtistsByAlbumIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListArtistsByAlbumId not implemented")
}
func (UnimplementedArtistAPIServer) ListArtistsByTrackId(context.Context, *ListArtistsByTrackIdRequest) (*ListArtistsByTrackIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListArtistsByTrackId not implemented")
}
func (UnimplementedArtistAPIServer) mustEmbedUnimplementedArtistAPIServer() {}
func (UnimplementedArtistAPIServer) testEmbeddedByValue()                   {}

// UnsafeArtistAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArtistAPIServer will
// result in compilation errors.
type UnsafeArtistAPIServer interface {
	mustEmbedUnimplementedArtistAPIServer()
}

func RegisterArtistAPIServer(s grpc.ServiceRegistrar, srv ArtistAPIServer) {
	// If the following call pancis, it indicates UnimplementedArtistAPIServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&ArtistAPI_ServiceDesc, srv)
}

func _ArtistAPI_GetArtistById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArtistRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).GetArtistById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_GetArtistById_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).GetArtistById(ctx, req.(*GetArtistRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_ListSeveralArtists_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSeveralArtistsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).ListSeveralArtists(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_ListSeveralArtists_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).ListSeveralArtists(ctx, req.(*ListSeveralArtistsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_CreateArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateArtistRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).CreateArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_CreateArtist_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).CreateArtist(ctx, req.(*CreateArtistRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_UpdateArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateArtistRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).UpdateArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_UpdateArtist_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).UpdateArtist(ctx, req.(*UpdateArtistRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_DeleteArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteArtistRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).DeleteArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_DeleteArtist_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).DeleteArtist(ctx, req.(*DeleteArtistRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_ListArtistsByAlbumId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListArtistsByAlbumIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).ListArtistsByAlbumId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_ListArtistsByAlbumId_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).ListArtistsByAlbumId(ctx, req.(*ListArtistsByAlbumIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistAPI_ListArtistsByTrackId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListArtistsByTrackIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistAPIServer).ListArtistsByTrackId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArtistAPI_ListArtistsByTrackId_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistAPIServer).ListArtistsByTrackId(ctx, req.(*ListArtistsByTrackIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ArtistAPI_ServiceDesc is the grpc.ServiceDesc for ArtistAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ArtistAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "rhythmony.metadata.ArtistAPI",
	HandlerType: (*ArtistAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetArtistById",
			Handler:    _ArtistAPI_GetArtistById_Handler,
		},
		{
			MethodName: "ListSeveralArtists",
			Handler:    _ArtistAPI_ListSeveralArtists_Handler,
		},
		{
			MethodName: "CreateArtist",
			Handler:    _ArtistAPI_CreateArtist_Handler,
		},
		{
			MethodName: "UpdateArtist",
			Handler:    _ArtistAPI_UpdateArtist_Handler,
		},
		{
			MethodName: "DeleteArtist",
			Handler:    _ArtistAPI_DeleteArtist_Handler,
		},
		{
			MethodName: "ListArtistsByAlbumId",
			Handler:    _ArtistAPI_ListArtistsByAlbumId_Handler,
		},
		{
			MethodName: "ListArtistsByTrackId",
			Handler:    _ArtistAPI_ListArtistsByTrackId_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "artist.proto",
}
