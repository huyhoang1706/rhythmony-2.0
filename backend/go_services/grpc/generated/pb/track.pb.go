// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.27.2
// source: track.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetTrackByIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTrackByIdRequest) Reset() {
	*x = GetTrackByIdRequest{}
	mi := &file_track_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetTrackByIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTrackByIdRequest) ProtoMessage() {}

func (x *GetTrackByIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTrackByIdRequest.ProtoReflect.Descriptor instead.
func (*GetTrackByIdRequest) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{0}
}

func (x *GetTrackByIdRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetTrackByIdResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Track *Track `protobuf:"bytes,1,opt,name=track,proto3" json:"track,omitempty"`
}

func (x *GetTrackByIdResponse) Reset() {
	*x = GetTrackByIdResponse{}
	mi := &file_track_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetTrackByIdResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTrackByIdResponse) ProtoMessage() {}

func (x *GetTrackByIdResponse) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTrackByIdResponse.ProtoReflect.Descriptor instead.
func (*GetTrackByIdResponse) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{1}
}

func (x *GetTrackByIdResponse) GetTrack() *Track {
	if x != nil {
		return x.Track
	}
	return nil
}

type ListSeveralTracksRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PageSize uint64 `protobuf:"varint,1,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	PageNo   uint64 `protobuf:"varint,2,opt,name=page_no,json=pageNo,proto3" json:"page_no,omitempty"`
}

func (x *ListSeveralTracksRequest) Reset() {
	*x = ListSeveralTracksRequest{}
	mi := &file_track_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListSeveralTracksRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSeveralTracksRequest) ProtoMessage() {}

func (x *ListSeveralTracksRequest) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSeveralTracksRequest.ProtoReflect.Descriptor instead.
func (*ListSeveralTracksRequest) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{2}
}

func (x *ListSeveralTracksRequest) GetPageSize() uint64 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListSeveralTracksRequest) GetPageNo() uint64 {
	if x != nil {
		return x.PageNo
	}
	return 0
}

type ListSeveralTracksResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PageSize      uint64   `protobuf:"varint,1,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	PageNo        uint64   `protobuf:"varint,2,opt,name=page_no,json=pageNo,proto3" json:"page_no,omitempty"`
	TotalPages    uint64   `protobuf:"varint,3,opt,name=total_pages,json=totalPages,proto3" json:"total_pages,omitempty"`
	TotalElements uint64   `protobuf:"varint,4,opt,name=total_elements,json=totalElements,proto3" json:"total_elements,omitempty"`
	Tracks        []*Track `protobuf:"bytes,5,rep,name=tracks,proto3" json:"tracks,omitempty"`
}

func (x *ListSeveralTracksResponse) Reset() {
	*x = ListSeveralTracksResponse{}
	mi := &file_track_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListSeveralTracksResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSeveralTracksResponse) ProtoMessage() {}

func (x *ListSeveralTracksResponse) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSeveralTracksResponse.ProtoReflect.Descriptor instead.
func (*ListSeveralTracksResponse) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{3}
}

func (x *ListSeveralTracksResponse) GetPageSize() uint64 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListSeveralTracksResponse) GetPageNo() uint64 {
	if x != nil {
		return x.PageNo
	}
	return 0
}

func (x *ListSeveralTracksResponse) GetTotalPages() uint64 {
	if x != nil {
		return x.TotalPages
	}
	return 0
}

func (x *ListSeveralTracksResponse) GetTotalElements() uint64 {
	if x != nil {
		return x.TotalElements
	}
	return 0
}

func (x *ListSeveralTracksResponse) GetTracks() []*Track {
	if x != nil {
		return x.Tracks
	}
	return nil
}

type CreateTrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Title    string   `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Explicit *bool    `protobuf:"varint,2,opt,name=explicit,proto3,oneof" json:"explicit,omitempty"`
	Lyrics   *string  `protobuf:"bytes,3,opt,name=lyrics,proto3,oneof" json:"lyrics,omitempty"`
	ArtistId []string `protobuf:"bytes,4,rep,name=artist_id,json=artistId,proto3" json:"artist_id,omitempty"`
}

func (x *CreateTrackRequest) Reset() {
	*x = CreateTrackRequest{}
	mi := &file_track_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateTrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTrackRequest) ProtoMessage() {}

func (x *CreateTrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTrackRequest.ProtoReflect.Descriptor instead.
func (*CreateTrackRequest) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{4}
}

func (x *CreateTrackRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *CreateTrackRequest) GetExplicit() bool {
	if x != nil && x.Explicit != nil {
		return *x.Explicit
	}
	return false
}

func (x *CreateTrackRequest) GetLyrics() string {
	if x != nil && x.Lyrics != nil {
		return *x.Lyrics
	}
	return ""
}

func (x *CreateTrackRequest) GetArtistId() []string {
	if x != nil {
		return x.ArtistId
	}
	return nil
}

type CreateTrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Track   *Track `protobuf:"bytes,1,opt,name=track,proto3" json:"track,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *CreateTrackResponse) Reset() {
	*x = CreateTrackResponse{}
	mi := &file_track_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CreateTrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTrackResponse) ProtoMessage() {}

func (x *CreateTrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTrackResponse.ProtoReflect.Descriptor instead.
func (*CreateTrackResponse) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{5}
}

func (x *CreateTrackResponse) GetTrack() *Track {
	if x != nil {
		return x.Track
	}
	return nil
}

func (x *CreateTrackResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type UpdateTrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Title    string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Explicit bool     `protobuf:"varint,3,opt,name=explicit,proto3" json:"explicit,omitempty"`
	Lyrics   string   `protobuf:"bytes,4,opt,name=lyrics,proto3" json:"lyrics,omitempty"`
	ArtistId []string `protobuf:"bytes,5,rep,name=artist_id,json=artistId,proto3" json:"artist_id,omitempty"`
}

func (x *UpdateTrackRequest) Reset() {
	*x = UpdateTrackRequest{}
	mi := &file_track_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateTrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTrackRequest) ProtoMessage() {}

func (x *UpdateTrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTrackRequest.ProtoReflect.Descriptor instead.
func (*UpdateTrackRequest) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{6}
}

func (x *UpdateTrackRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateTrackRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *UpdateTrackRequest) GetExplicit() bool {
	if x != nil {
		return x.Explicit
	}
	return false
}

func (x *UpdateTrackRequest) GetLyrics() string {
	if x != nil {
		return x.Lyrics
	}
	return ""
}

func (x *UpdateTrackRequest) GetArtistId() []string {
	if x != nil {
		return x.ArtistId
	}
	return nil
}

type UpdateTrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Track   *Track `protobuf:"bytes,1,opt,name=track,proto3" json:"track,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *UpdateTrackResponse) Reset() {
	*x = UpdateTrackResponse{}
	mi := &file_track_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateTrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTrackResponse) ProtoMessage() {}

func (x *UpdateTrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTrackResponse.ProtoReflect.Descriptor instead.
func (*UpdateTrackResponse) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateTrackResponse) GetTrack() *Track {
	if x != nil {
		return x.Track
	}
	return nil
}

func (x *UpdateTrackResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type DeleteTrackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteTrackRequest) Reset() {
	*x = DeleteTrackRequest{}
	mi := &file_track_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteTrackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTrackRequest) ProtoMessage() {}

func (x *DeleteTrackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTrackRequest.ProtoReflect.Descriptor instead.
func (*DeleteTrackRequest) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{8}
}

func (x *DeleteTrackRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type DeleteTrackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *DeleteTrackResponse) Reset() {
	*x = DeleteTrackResponse{}
	mi := &file_track_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteTrackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTrackResponse) ProtoMessage() {}

func (x *DeleteTrackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_track_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTrackResponse.ProtoReflect.Descriptor instead.
func (*DeleteTrackResponse) Descriptor() ([]byte, []int) {
	return file_track_proto_rawDescGZIP(), []int{9}
}

func (x *DeleteTrackResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_track_proto protoreflect.FileDescriptor

var file_track_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x72,
	0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x1a, 0x0a, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x25, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x22, 0x47, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b,
	0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x05,
	0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x72, 0x68,
	0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x2e, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x22, 0x50, 0x0a,
	0x18, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x76, 0x65, 0x72, 0x61, 0x6c, 0x54, 0x72, 0x61, 0x63,
	0x6b, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67,
	0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x70, 0x61,
	0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x6e,
	0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x70, 0x61, 0x67, 0x65, 0x4e, 0x6f, 0x22,
	0xcc, 0x01, 0x0a, 0x19, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x76, 0x65, 0x72, 0x61, 0x6c, 0x54,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a,
	0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x70, 0x61,
	0x67, 0x65, 0x5f, 0x6e, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x70, 0x61, 0x67,
	0x65, 0x4e, 0x6f, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x70, 0x61, 0x67,
	0x65, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x50,
	0x61, 0x67, 0x65, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x65, 0x6c,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0d, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x31, 0x0a, 0x06, 0x74,
	0x72, 0x61, 0x63, 0x6b, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x72, 0x68,
	0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x2e, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x06, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x22, 0x9d,
	0x01, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x1f, 0x0a, 0x08, 0x65,
	0x78, 0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52,
	0x08, 0x65, 0x78, 0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x06,
	0x6c, 0x79, 0x72, 0x69, 0x63, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x06,
	0x6c, 0x79, 0x72, 0x69, 0x63, 0x73, 0x88, 0x01, 0x01, 0x12, 0x1b, 0x0a, 0x09, 0x61, 0x72, 0x74,
	0x69, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x61, 0x72,
	0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x65, 0x78, 0x70, 0x6c, 0x69,
	0x63, 0x69, 0x74, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x6c, 0x79, 0x72, 0x69, 0x63, 0x73, 0x22, 0x60,
	0x0a, 0x13, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52,
	0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x22, 0x8b, 0x01, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x1a, 0x0a,
	0x08, 0x65, 0x78, 0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x08, 0x65, 0x78, 0x70, 0x6c, 0x69, 0x63, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x79, 0x72,
	0x69, 0x63, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6c, 0x79, 0x72, 0x69, 0x63,
	0x73, 0x12, 0x1b, 0x0a, 0x09, 0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x05,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x22, 0x60,
	0x0a, 0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2f, 0x0a, 0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52,
	0x05, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x22, 0x24, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x2f, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x32, 0xff, 0x03, 0x0a, 0x08, 0x54, 0x72, 0x61, 0x63,
	0x6b, 0x41, 0x50, 0x49, 0x12, 0x61, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b,
	0x42, 0x79, 0x49, 0x64, 0x12, 0x27, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x63, 0x6b, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e,
	0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x42, 0x79, 0x49, 0x64, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x70, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x53,
	0x65, 0x76, 0x65, 0x72, 0x61, 0x6c, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x73, 0x12, 0x2c, 0x2e, 0x72,
	0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x76, 0x65, 0x72, 0x61, 0x6c, 0x54, 0x72, 0x61,
	0x63, 0x6b, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x72, 0x68, 0x79,
	0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x76, 0x65, 0x72, 0x61, 0x6c, 0x54, 0x72, 0x61, 0x63, 0x6b,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5e, 0x0a, 0x0b, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x26, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68,
	0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x27, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5e, 0x0a, 0x0b, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x26, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68,
	0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x27, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5e, 0x0a, 0x0b, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x12, 0x26, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68,
	0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x27, 0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x72, 0x61, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x31, 0x0a, 0x19, 0x63, 0x6f, 0x6d,
	0x2e, 0x72, 0x68, 0x79, 0x74, 0x68, 0x6d, 0x6f, 0x6e, 0x79, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x2e, 0x70, 0x62, 0x42, 0x0d, 0x54, 0x72, 0x61, 0x63, 0x6b, 0x41, 0x50, 0x49,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x03, 0x70, 0x62, 0x2f, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_track_proto_rawDescOnce sync.Once
	file_track_proto_rawDescData = file_track_proto_rawDesc
)

func file_track_proto_rawDescGZIP() []byte {
	file_track_proto_rawDescOnce.Do(func() {
		file_track_proto_rawDescData = protoimpl.X.CompressGZIP(file_track_proto_rawDescData)
	})
	return file_track_proto_rawDescData
}

var file_track_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_track_proto_goTypes = []any{
	(*GetTrackByIdRequest)(nil),       // 0: rhythmony.metadata.GetTrackByIdRequest
	(*GetTrackByIdResponse)(nil),      // 1: rhythmony.metadata.GetTrackByIdResponse
	(*ListSeveralTracksRequest)(nil),  // 2: rhythmony.metadata.ListSeveralTracksRequest
	(*ListSeveralTracksResponse)(nil), // 3: rhythmony.metadata.ListSeveralTracksResponse
	(*CreateTrackRequest)(nil),        // 4: rhythmony.metadata.CreateTrackRequest
	(*CreateTrackResponse)(nil),       // 5: rhythmony.metadata.CreateTrackResponse
	(*UpdateTrackRequest)(nil),        // 6: rhythmony.metadata.UpdateTrackRequest
	(*UpdateTrackResponse)(nil),       // 7: rhythmony.metadata.UpdateTrackResponse
	(*DeleteTrackRequest)(nil),        // 8: rhythmony.metadata.DeleteTrackRequest
	(*DeleteTrackResponse)(nil),       // 9: rhythmony.metadata.DeleteTrackResponse
	(*Track)(nil),                     // 10: rhythmony.metadata.Track
}
var file_track_proto_depIdxs = []int32{
	10, // 0: rhythmony.metadata.GetTrackByIdResponse.track:type_name -> rhythmony.metadata.Track
	10, // 1: rhythmony.metadata.ListSeveralTracksResponse.tracks:type_name -> rhythmony.metadata.Track
	10, // 2: rhythmony.metadata.CreateTrackResponse.track:type_name -> rhythmony.metadata.Track
	10, // 3: rhythmony.metadata.UpdateTrackResponse.track:type_name -> rhythmony.metadata.Track
	0,  // 4: rhythmony.metadata.TrackAPI.GetTrackById:input_type -> rhythmony.metadata.GetTrackByIdRequest
	2,  // 5: rhythmony.metadata.TrackAPI.ListSeveralTracks:input_type -> rhythmony.metadata.ListSeveralTracksRequest
	4,  // 6: rhythmony.metadata.TrackAPI.CreateTrack:input_type -> rhythmony.metadata.CreateTrackRequest
	6,  // 7: rhythmony.metadata.TrackAPI.UpdateTrack:input_type -> rhythmony.metadata.UpdateTrackRequest
	8,  // 8: rhythmony.metadata.TrackAPI.DeleteTrack:input_type -> rhythmony.metadata.DeleteTrackRequest
	1,  // 9: rhythmony.metadata.TrackAPI.GetTrackById:output_type -> rhythmony.metadata.GetTrackByIdResponse
	3,  // 10: rhythmony.metadata.TrackAPI.ListSeveralTracks:output_type -> rhythmony.metadata.ListSeveralTracksResponse
	5,  // 11: rhythmony.metadata.TrackAPI.CreateTrack:output_type -> rhythmony.metadata.CreateTrackResponse
	7,  // 12: rhythmony.metadata.TrackAPI.UpdateTrack:output_type -> rhythmony.metadata.UpdateTrackResponse
	9,  // 13: rhythmony.metadata.TrackAPI.DeleteTrack:output_type -> rhythmony.metadata.DeleteTrackResponse
	9,  // [9:14] is the sub-list for method output_type
	4,  // [4:9] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_track_proto_init() }
func file_track_proto_init() {
	if File_track_proto != nil {
		return
	}
	file_type_proto_init()
	file_track_proto_msgTypes[4].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_track_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_track_proto_goTypes,
		DependencyIndexes: file_track_proto_depIdxs,
		MessageInfos:      file_track_proto_msgTypes,
	}.Build()
	File_track_proto = out.File
	file_track_proto_rawDesc = nil
	file_track_proto_goTypes = nil
	file_track_proto_depIdxs = nil
}
